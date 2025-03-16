import React from "react";
import "./EventTimeline.css";

const events = [
  { id: 1, date: "March 18, 2025", title: "Opening Ceremony", desc: "Kickstart the fest with an electrifying ceremony." },
  { id: 2, date: "March 19, 2025", title: "AI Hackathon", desc: "Build cutting-edge AI solutions in 24 hours." },
  { id: 3, date: "March 20, 2025", title: "Cybersecurity Workshop", desc: "Learn ethical hacking & cyber defense strategies." },
  { id: 4, date: "March 21, 2025", title: "Closing & Awards", desc: "Celebrate innovation with grand prizes!" }
];

const EventTimeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {events.map((event, index) => (
          <div key={event.id} className="timeline-event">
            <div className="timeline-circle">{index + 1}</div>
            <div className="event-card">
              <p className="event-date">{event.date}</p>
              <h2 className="event-title">{event.title}</h2>
              <p className="event-desc">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTimeline;
