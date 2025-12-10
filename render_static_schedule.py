"""Generate a static HTML preview of the Conductor schedule without Flask."""
from __future__ import annotations

import argparse
import pathlib

from conductor_schedule import DailyInputs, generate_schedule, load_inputs


def build_html(schedule_text: str) -> str:
    """Wrap plain-text schedule in a minimal styled HTML shell."""
    # Use a simple layout so it can be opened directly from disk.
    return f"""
<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\" />
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
  <title>Conductor Schedule Preview</title>
  <style>
    :root {{
      color-scheme: dark;
      --bg: #0b0c10;
      --panel: #11151c;
      --text: #e6eef7;
      --accent: #79c0ff;
      --muted: #9fb3c8;
    }}
    body {{
      margin: 0;
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: radial-gradient(circle at 20% 20%, rgba(121, 192, 255, 0.08), transparent 25%),
                  radial-gradient(circle at 80% 10%, rgba(124, 92, 255, 0.08), transparent 20%),
                  var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 12px 64px;
    }}
    .wrapper {{
      max-width: 900px;
      width: 100%;
      background: var(--panel);
      border: 1px solid rgba(255, 255, 255, 0.06);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
      border-radius: 18px;
      padding: 28px 24px;
    }}
    h1 {{
      margin: 0 0 12px;
      font-size: 1.35rem;
      color: var(--accent);
      letter-spacing: 0.01em;
    }}
    p.meta {{
      color: var(--muted);
      margin: 0 0 20px;
      font-size: 0.95rem;
    }}
    pre {{
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 16px 18px;
      font-size: 0.95rem;
      line-height: 1.55;
      white-space: pre-wrap;
      word-break: keep-all;
    }}
  </style>
</head>
<body>
  <div class=\"wrapper\">
    <h1>Conductor Schedule Preview</h1>
    <p class=\"meta\">Generated offline using <code>conductor_schedule.py</code>. Open this file directly in a browser.</p>
    <pre>{schedule_text}</pre>
  </div>
</body>
</html>
"""


def save_preview(html: str, output_path: pathlib.Path) -> pathlib.Path:
    output_path.write_text(html, encoding="utf-8")
    return output_path.resolve()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Create a static HTML preview for the Conductor schedule")
    parser.add_argument("--input", required=True, help="Path to JSON input for the schedule generator")
    parser.add_argument(
        "--output",
        default="static_schedule_preview.html",
        help="Where to write the generated HTML (default: static_schedule_preview.html)",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    inputs: DailyInputs = load_inputs(args.input)
    schedule_text = generate_schedule(inputs)
    html = build_html(schedule_text)
    output_path = save_preview(html, pathlib.Path(args.output))
    print(f"Static preview written to: {output_path}")


if __name__ == "__main__":
    main()
