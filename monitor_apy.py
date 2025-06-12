import argparse
import re
import time
import urllib.error
import urllib.request
from typing import Optional


def fetch_apy(url: str) -> Optional[float]:
    """Fetches the APY value from the given URL.

    This function performs a GET request and tries to locate a numeric
    APY value in the response text. The search is generic and may need
    adjustment depending on the protocol's API.
    """
    try:
        with urllib.request.urlopen(url, timeout=10) as resp:
            content = resp.read().decode()
    except urllib.error.URLError as exc:
        print(f"Failed to fetch APY from {url}: {exc}")
        return None

    # Look for patterns like '12.34%' or '"apy": 0.1234'
    percent_match = re.search(r"(\d+\.\d+)%", content)
    if percent_match:
        return float(percent_match.group(1)) / 100.0

    json_match = re.search(r'"?apy"?\s*[:=]\s*(\d+\.\d+)', content, re.IGNORECASE)
    if json_match:
        return float(json_match.group(1))

    print("APY value not found in page")
    return None


def monitor(url: str, base_apy: float, protocol: str, interval: int = 60) -> None:
    """Continuously checks the APY and prints a message on change."""
    print(f"Monitoring {protocol} at {url}")
    current_apy = fetch_apy(url)
    if current_apy is None:
        current_apy = base_apy
        print(f"Using provided base APY: {base_apy}")
    else:
        print(f"Initial APY: {current_apy}")

    while True:
        time.sleep(interval)
        new_apy = fetch_apy(url)
        if new_apy is None:
            continue
        if new_apy != current_apy:
            print(f"APY changed from {current_apy} to {new_apy}")
            current_apy = new_apy


def main() -> None:
    parser = argparse.ArgumentParser(description="Monitor protocol APY changes")
    parser.add_argument("url", help="URL to fetch APY from")
    parser.add_argument("base_apy", type=float, help="Baseline APY to start from")
    parser.add_argument("protocol", help="Protocol name")
    parser.add_argument("--interval", type=int, default=60, help="Check interval in seconds")
    args = parser.parse_args()

    monitor(args.url, args.base_apy, args.protocol, args.interval)


if __name__ == "__main__":
    main()
