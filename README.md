# prompt-engineering

This repository contains simple utilities for experimenting with prompt engineering.

## Conductor Agent schedule

Generate Chris's daily rhythm based on health, cognition, and product signals.

### CLI

```bash
python conductor_schedule.py --input sample_schedule_input.json
```

### Front-end

1. Install Flask if needed:

   ```bash
   pip install flask
   ```

2. Start the app:

   ```bash
   python app.py
   ```

3. Open http://localhost:5000 to load the sample schedule, tweak inputs, and generate a new plan.

## Monitor APY Changes

`monitor_apy.py` is a small script that polls a given URL for APY changes. It
can be used to watch protocols like Kamino and report whenever the APY value on
the page changes.

### Usage

```bash
python monitor_apy.py <url> <base_apy> <protocol> [--interval SECONDS]
```

Example:

```bash
python monitor_apy.py https://example.com/kamino 0.05 kamino --interval 60
```

The script will fetch the page every 60 seconds and notify if the APY value has
changed from the previous check.
