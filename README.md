# Promptwars - Prompt Wars Hackathon Submission

Promptwars is a Flask web app where two players compete by writing AI prompts. The app compares prompt quality using simple heuristic scoring and declares a round winner.

## Features

- Two-player prompt battle interface
- Prompt quality scoring (length, role clarity, constraints, structure)
- Round winner highlight
- Running scoreboard
- Reset option for a fresh match
- Responsive UI for desktop and mobile

## Tech Stack

- Python 3
- Flask
- HTML, CSS, JavaScript

## Project Structure

```text
Promptwars/
  app.py
  requirements.txt
  .gitignore
  README.md
  static/
    style.css
    script.js
  templates/
    index.html
```

## Local Setup

1. Clone the repository:

```bash
git clone <your-public-repo-url>
cd Promptwars
```

2. Create and activate a virtual environment (recommended):

```bash
python -m venv .venv
.venv\\Scripts\\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the app:

```bash
python app.py
```

5. Open in browser:

```text
http://127.0.0.1:5000
```

## Prompt Wars Submission Checklist

- Repository is **public**
- Repository has **only one branch**
- Repository size is **less than 10 MB**
- Code is pushed to GitHub and link is copied for portal submission

## Notes

This project is a demo prototype intended for hackathon submission and can be extended with backend AI model evaluation later.
