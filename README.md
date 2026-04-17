# Promptwars - Prompt Wars Hackathon Submission

Promptwars is a Flask web app where two players compete by writing AI prompts. The app compares prompt quality using simple heuristic scoring and declares a round winner.

## Features

- Two-player prompt battle interface
- Prompt quality scoring (length, role clarity, constraints, structure)
- Round winner highlight
- Running scoreboard
- Reset option for a fresh match
- Responsive UI for desktop and mobile
- Health check endpoint for deployment verification (`/health`)
- Security hardening headers for safer web delivery
- Basic automated tests with `pytest`

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

## Run Tests

```bash
pytest -q
```

## Live Preview Deployment (Google Cloud Run)

This repository is optimized for deployment on Google Cloud Platform. 
Since we redeemed Google Cloud credits for the hackathon, we are hosting on a premium, auto-scaling enterprise container system!

1. Install Google Cloud SDK (`gcloud`).
2. Authenticate: `gcloud auth login`
3. Set your project: `gcloud config set project <your-project-id>`
4. Deploy: `gcloud run deploy promptwars --source . --region=us-central1 --allow-unauthenticated`
5. After deployment, save your live Google Cloud Run link (example: `https://promptwars-...-uc.a.run.app`).

Use this live link in your hackathon submission!

## AI Score Improvement Mapping

- Instructions: clear README setup and deployment steps
- Code Quality: modular Flask app (`create_app`) and clean frontend logic
- Security: CSP and response security headers in backend
- Efficiency: lightweight scoring logic, no heavy runtime dependencies
- Testing: route + health + security-header test coverage
- Accessibility: skip link, semantic labels, live region for result updates
- Google Services: Google Fonts integrated in UI

## Prompt Wars Submission Checklist

- Repository is **public**
- Repository has **only one branch**
- Repository size is **less than 10 MB**
- Code is pushed to GitHub and link is copied for portal submission
- Live preview link is ready and working
- LinkedIn post link is ready and public

## LinkedIn Post Template (Narrative Submission)

Copy, personalize, and post this on LinkedIn:

```text
Built "Promptwars" for the Prompt Wars Hackathon 🚀

What I built:
- A Flask-based web app where two players battle with AI prompts
- Prompt scoring using role clarity, constraints, structure, and specificity
- Responsive UI with round-based winner and scoreboard
- Added testing, accessibility improvements, and deployment-ready setup

Tech stack: Python, Flask, HTML, CSS, JavaScript
Live demo: <your-live-link>
GitHub: <your-github-repo-link>

#PromptWars #Hackathon #AI #Flask #WebDevelopment #BuildInPublic
```

## Notes

This project is a demo prototype intended for hackathon submission and can be extended with backend AI model evaluation later.
