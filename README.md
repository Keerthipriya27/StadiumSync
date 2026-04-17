# StadiumSync

StadiumSync is a real-time, responsive dashboard designed strictly for attendees at large-scale sporting venues. Built to address the pervasive hackathon track challenges of crowd movement, waiting times, and real-time coordination, this platform empowers users with actionable, live insights.

## Features

- **Live Crowd Heatmap:** Real-time zoning data allows users to identify highly congested areas and navigate safer, less-crowded paths.
- **Queue Trackers:** Constantly updating estimated wait times for critical venue locations like restrooms and food/beverage stands.
- **Meetup Coordinator:** A quick interface to pinpoint and broadcast specific meeting gates/zones to friends in the crowd.
- **Live Alerts Schedule:** Event timeline with active warnings, safety broadcasts, and match tracking.
- **Premium UI:** Aesthetic dark mode UI built with CSS Grid, featuring micro-animations, neon status indicators, and glassmorphism.

## Tech Stack

- **Backend:** Python + Flask (Fast API simulation)
- **Frontend:** Vanilla JS, HTML, Custom CSS
- **Deployment:** Render / Built-in capability

## Running the Application Locally

1. Create a virtual environment and load dependencies:
   ```bash
   python -m venv .venv
   source .venv/Scripts/activate  # On Windows
   pip install -r requirements.txt
   ```

2. Start the Flask application:
   ```bash
   python app.py
   ```

3. Navigate to `http://localhost:5000` to view the dashboard live.

## Hackathon Goal Addressed

This project directly addresses the Prompt Wars Hackathon / Event track prompt:
*"Design a solution that improves the physical event experience for attendees at large-scale sporting venues. The system should address challenges such as crowd movement, waiting times, and real-time coordination, while ensuring a seamless and enjoyable experience."*

By rendering a centralized, live updating application, attendees can minimize stress, reduce wait times, and drastically improve their physical experience.
