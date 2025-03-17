import React from "react";
import "./GuestSpeakers.css"; // Import CSS file for styling

const GuestSpeakersSchedule = () => {
    const speakers = [
        {
            name: "Bill Gates",
            date: "March 20, 2025",
            time: "10:00 AM - 11:30 AM",
            img: "https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds"
        },
        {
            name: "Elon Musk",
            date: "March 21, 2025",
            time: "2:00 PM - 3:30 PM",
            img: "https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/0c3fcefb-bc28-4af6-985e-0c3b499ae832/Elon_Musk_Royal_Society.jpg?fm=jpg&auto=format"
        },
        {
            name: "Sundar Pichai",
            date: "March 22, 2025",
            time: "11:00 AM - 12:30 PM",
            img: "https://ztd-euwest2-prod-s3.s3.eu-west-2.amazonaws.com/sundar_4e29dcb79b.jpg"
        }
    ];

    return (
        <div className="guest-speakers">
            <h1 style={{ textAlign: "center", color: "white" }}>Guest Speakers Schedule at FutureBytes </h1>
            <div className="speakers-container">
                {speakers.map((speaker, index) => (
                    <div className="speaker-card" key={index}>
                        <img src={speaker.img} alt={speaker.name} className="speaker-img" />
                        <h2>{speaker.name}</h2>
                        <p><b>Date:</b> {speaker.date}</p>
                        <p><b>Time:</b> {speaker.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuestSpeakersSchedule;