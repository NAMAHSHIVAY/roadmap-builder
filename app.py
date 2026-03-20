 
from flask import Flask, render_template, request, jsonify
import json
import os
from datetime import datetime, timedelta

app = Flask(__name__)

# ─────────────────────────────────────────
# LOAD ROADMAP DATA
# ─────────────────────────────────────────

def load_roadmap(skill):
    skill_file = os.path.join("roadmaps", f"{skill.lower()}.json")
    if not os.path.exists(skill_file):
        return None
    with open(skill_file, "r") as f:
        return json.load(f)

# ─────────────────────────────────────────
# CALCULATE ROADMAP LOGIC
# ─────────────────────────────────────────

def calculate_roadmap(roadmap_data, track, weekday_hours, saturday_hours, sunday_hours):

    # Get starting milestone based on track
    start_milestone = roadmap_data["tracks"][track]["start_milestone"]

    # Filter milestones from start point
    milestones = [
        m for m in roadmap_data["milestones"]
        if m["id"] >= start_milestone
    ]

    # Calculate total hours remaining
    total_hours = sum(m["base_hours"] for m in milestones)

    # Calculate weekly hours
    weekly_hours = (weekday_hours * 5) + saturday_hours + sunday_hours

    # Avoid division by zero
    if weekly_hours == 0:
        weekly_hours = 1

    # Calculate weeks and completion date
    weeks_to_complete = total_hours / weekly_hours
    completion_date = datetime.today() + timedelta(weeks=weeks_to_complete)

    # Build week by week schedule
    schedule = []
    current_week = 1
    hours_this_week = 0

    for milestone in milestones:
        milestone_hours_remaining = milestone["base_hours"]
        milestone_weeks = []

        while milestone_hours_remaining > 0:
            hours_available = weekly_hours - hours_this_week
            hours_used = min(hours_available, milestone_hours_remaining)

            milestone_hours_remaining -= hours_used
            hours_this_week += hours_used

            if hours_this_week >= weekly_hours:
                milestone_weeks.append(current_week)
                current_week += 1
                hours_this_week = 0

        if not milestone_weeks:
            milestone_weeks.append(current_week)

        schedule.append({
            "milestone": milestone,
            "weeks": milestone_weeks,
            "week_label": f"Week {milestone_weeks[0]}" if len(milestone_weeks) == 1
                         else f"Week {milestone_weeks[0]} - {milestone_weeks[-1]}"
        })

    return {
        "milestones": schedule,
        "total_hours": round(total_hours),
        "weekly_hours": round(weekly_hours, 1),
        "weeks_to_complete": round(weeks_to_complete, 1),
        "completion_date": completion_date.strftime("%d %B %Y"),
        "track": roadmap_data["tracks"][track]["label"],
        "skill": roadmap_data["skill"]
    }

# ─────────────────────────────────────────
# ROUTES
# ─────────────────────────────────────────

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/assess/<skill>")
def assess(skill):
    roadmap = load_roadmap(skill)
    if not roadmap:
        return "Skill not found", 404
    return render_template(
        "assess.html",
        skill=skill,
        assessment=roadmap["assessment"]
    )


@app.route("/schedule", methods=["POST"])
def schedule():
    data = request.form

    skill = data.get("skill")
    track = data.get("track")
    weekday_hours = float(data.get("weekday_hours", 1))
    saturday_hours = float(data.get("saturday_hours", 0))
    sunday_hours = float(data.get("sunday_hours", 0))

    roadmap = load_roadmap(skill)
    if not roadmap:
        return "Skill not found", 404

    result = calculate_roadmap(
        roadmap,
        track,
        weekday_hours,
        saturday_hours,
        sunday_hours
    )

    return render_template("roadmap.html", result=result)


# ─────────────────────────────────────────
# RUN
# ─────────────────────────────────────────

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(
        host="0.0.0.0",
        port=port,
        debug=False
    )