import React from "react";
import "./EventTimeline.css";

const events = [
  { id: 1, date: "April 10, 2025", title: "Opening Ceremony", desc: "Kickstart the fest with an electrifying ceremony." },
  { id: 2, date: "April 11, 2025", title: "AI Hackathon", desc: "Build cutting-edge AI solutions in 24 hours." },
  { id: 3, date: "April 12, 2025", title: "Cybersecurity Workshop", desc: "Learn ethical hacking & cyber defense strategies." },
  { id: 4, date: "April 13, 2025", title: "Closing & Awards", desc: "Celebrate innovation with grand prizes!" }
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
