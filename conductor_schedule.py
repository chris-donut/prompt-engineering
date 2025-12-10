"""Daily schedule generator for the Conductor Agent.

This script produces a time-bounded daily rhythm for Chris Zhu by combining
health signals, cognition constraints, and product priorities into one flow.
Run with a JSON input file that matches the expected schema.
"""
from __future__ import annotations

import argparse
import json
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Dict, List, Optional


@dataclass
class SleepData:
    hrv: Optional[int] = None
    deep_sleep_hours: Optional[float] = None
    duration_hours: Optional[float] = None


@dataclass
class DailyInputs:
    today_date: str
    sleep_data: SleepData
    energy_level: str
    mood: str
    calendar_events: List[str]
    linear_tasks: List[str]
    slack_unreads: List[str]
    notion_version_goals: List[str]
    blockers: List[str]
    yesterday_expansion_log: List[str]
    health_constraints: Dict[str, Any] = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "DailyInputs":
        sleep_raw = data.get("sleep_data", {}) or {}
        sleep = SleepData(
            hrv=_safe_int(sleep_raw.get("HRV")),
            deep_sleep_hours=_safe_float(
                sleep_raw.get("deep_sleep_hours") or sleep_raw.get("deep_sleep_duration")
            ),
            duration_hours=_safe_float(sleep_raw.get("duration_hours")),
        )
        return cls(
            today_date=data.get("today_date") or _today_string(),
            sleep_data=sleep,
            energy_level=(data.get("energy_level") or "unknown").lower(),
            mood=(data.get("mood") or "neutral").lower(),
            calendar_events=data.get("calendar_events") or [],
            linear_tasks=data.get("linear_tasks") or [],
            slack_unreads=data.get("slack_unreads") or [],
            notion_version_goals=data.get("notion_version_goals") or [],
            blockers=data.get("blockers") or [],
            yesterday_expansion_log=data.get("yesterday_expansion_log") or [],
            health_constraints=data.get("health_constraints") or {},
        )


@dataclass
class ScheduleBlock:
    title: str
    window: str
    actions: List[str]

    def render(self) -> str:
        actions_text = "\n".join(f"- {item}" for item in self.actions)
        return f"{self.title}\n{self.window}\n{actions_text}".strip()


def _today_string() -> str:
    return datetime.now().strftime("%Y-%m-%d")


def _safe_int(value: Any) -> Optional[int]:
    try:
        return int(value) if value is not None else None
    except (TypeError, ValueError):
        return None


def _safe_float(value: Any) -> Optional[float]:
    try:
        return float(value) if value is not None else None
    except (TypeError, ValueError):
        return None


def _decide_workout_intensity(inputs: DailyInputs) -> str:
    deep_sleep_low = inputs.sleep_data.deep_sleep_hours is not None and inputs.sleep_data.deep_sleep_hours < 1
    energy_low = inputs.energy_level == "low"
    heavy_meeting = any("investor" in event.lower() or "review" in event.lower() for event in inputs.calendar_events)

    if energy_low or deep_sleep_low:
        return "low"
    if heavy_meeting:
        return "medium"
    if inputs.sleep_data.hrv and inputs.sleep_data.hrv > 80:
        return "high"
    return "medium"


def _choose_meta_question(inputs: DailyInputs) -> str:
    if inputs.energy_level == "low":
        return "No meta-question today—protect focus and avoid abstraction."
    if inputs.notion_version_goals:
        return f"What is the single decision that unblocks '{inputs.notion_version_goals[0]}' today?"
    return "What is the highest-leverage decision to advance this week's version lock?"


def _artifact_of_day(inputs: DailyInputs) -> str:
    if inputs.linear_tasks:
        return f"Ship: {inputs.linear_tasks[0]}"
    if inputs.notion_version_goals:
        return f"Draft artifact toward: {inputs.notion_version_goals[0]}"
    return "Create a concise progress memo summarizing today's outcomes."


def _blocker_focus(inputs: DailyInputs) -> str:
    if inputs.blockers:
        return inputs.blockers[0]
    if inputs.slack_unreads:
        return "Triaging critical Slack blockers only"
    return "Identify and resolve any hidden dependency before 15:30"


def _filtered_signals(signals: List[str], limit: int = 3) -> List[str]:
    return signals[:limit] if signals else []


def _core_focus(inputs: DailyInputs) -> Dict[str, Any]:
    version_goals = _filtered_signals(inputs.notion_version_goals, 3)
    blockers = _filtered_signals(inputs.blockers, 3)
    meta_question = _choose_meta_question(inputs)
    return {
        "version_goals": version_goals,
        "blockers": blockers,
        "meta_question": meta_question,
    }


def _build_schedule_blocks(inputs: DailyInputs) -> List[ScheduleBlock]:
    deep_sleep_low = inputs.sleep_data.deep_sleep_hours is not None and inputs.sleep_data.deep_sleep_hours < 1
    hrv_high = inputs.sleep_data.hrv is not None and inputs.sleep_data.hrv > 80
    energy_low = inputs.energy_level == "low"
    heavy_meeting = any("investor" in event.lower() or "review" in event.lower() for event in inputs.calendar_events)

    workout_intensity = _decide_workout_intensity(inputs)
    artifact = _artifact_of_day(inputs)
    blocker = _blocker_focus(inputs)

    morning_actions = [
        "Cold light exposure + hydration",
        "Protein-forward breakfast (avoid sugar spikes)",
        "3–3–1 review: goals, blockers, approvals",
        "Slack/Linear noise filter: only priority p0/p1 items",
        f"Set artifact target: {artifact}",
    ]
    if deep_sleep_low:
        morning_actions.insert(1, "20 min mobility + breathing (protect low deep sleep)")

    deep_work_actions = [
        "Builder Agent executes core version work",
        f"Artifact of the day: {artifact}",
        f"Primary blocker to clear: {blocker}",
        "No meetings, no Slack",
    ]
    if energy_low:
        deep_work_actions.append("Keep tasks executional; defer abstraction")

    midday_actions = [
        "Protein + complex carbs lunch; no screens",
        "15–20 min sunlight walk",
        f"Workout ({workout_intensity} intensity): strength + core (short if low sleep)",
    ]

    execution_actions = [
        "Decision approvals only (reduce decision fatigue)",
        "Linear unblocking + reviews",
        "Prep contingency for any afternoon meeting",
    ]
    if hrv_high:
        execution_actions.append("Optional: extend execution to 18:00 if flow is strong")

    evening_actions = [
        "Cooldown: stretch + light dinner",
        "Social / recovery time; no heavy abstraction",
    ]

    expansion_actions = [
        "Explorer Agent: research + world-building (one layer only)",
        "Capture one insight; stop before divergence spiral",
        f"Review yesterday expansion log for closure ({len(inputs.yesterday_expansion_log)} items)",
    ]
    if heavy_meeting:
        expansion_actions.insert(0, "Shorten window if meeting fatigue persists")
    if energy_low:
        expansion_actions = ["Replace expansion with restorative reading or sleep"]

    sleep_actions = [
        "Screen-off protocol, dim lights",
        "Gratitude + reflection; auto-generate notes",
        "In-bed by 23:30 to protect deep sleep",
    ]

    return [
        ScheduleBlock("🧠 Morning Rhythm", "08:00–11:00", morning_actions),
        ScheduleBlock("🔥 Deep Work Block", "11:00–14:00", deep_work_actions),
        ScheduleBlock("🥗 Midday Rhythm", "14:00–15:30", midday_actions),
        ScheduleBlock("📈 Execution Block", "15:30–17:30", execution_actions),
        ScheduleBlock("🌙 Evening", "17:30–20:00", evening_actions),
        ScheduleBlock("🌌 Expansion Window", "21:00–23:00", expansion_actions),
        ScheduleBlock("🛏 Sleep Ramp-down", "23:00–00:00", sleep_actions),
    ]


def generate_schedule(inputs: DailyInputs) -> str:
    focus = _core_focus(inputs)
    blocks = _build_schedule_blocks(inputs)

    header = [
        "📅 Chris Daily Rhythm — Generated by Conductor Agent",
        f"Date: {inputs.today_date}",
        "\nCore Focus",  # blank line for readability
        f"3 Version Goals: {', '.join(focus['version_goals']) or 'None provided; pick top 3 now'}",
        f"3 Blockers: {', '.join(focus['blockers']) or 'None provided; identify before 10:20'}",
        f"1 Meta Question: {focus['meta_question']}",
        "",
    ]

    rendered_blocks = [block.render() for block in blocks]
    return "\n\n".join(header + rendered_blocks)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate Chris's daily schedule")
    parser.add_argument("--input", required=True, help="Path to JSON file with daily inputs")
    return parser.parse_args()


def load_inputs(path: str) -> DailyInputs:
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    return DailyInputs.from_dict(data)


def main() -> None:
    args = parse_args()
    inputs = load_inputs(args.input)
    schedule = generate_schedule(inputs)
    print(schedule)


if __name__ == "__main__":
    main()
