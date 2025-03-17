import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MainInfo from "./components/mainInfo/MainInfo";
import About from "./components/about/About";
import Stats from "./components/stats/Stats";
import Guide from "./components/guide/Guide";
import Footer from "./components/footer/Footer";
import Chatbot from "./Chatbot"; // ✅ Chatbot component
import Tshirt from "./Tshirt"; // ✅ T-shirt component
import EventTimeline from "./EventTimeline"; // ✅ Event Timeline component
import GuestSpeakersSchedule from "./GuestSpeakers"; // ✅ Imported correctly

const App = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("show");
                } else {
                    e.target.classList.remove("show");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((el) => observer.observe(el));
    }, []); // ✅ Correct dependency array to prevent re-runs

    return (
        <>
            <Navbar />
            <div className="column">
                <div style={{ height: "100vh", maxHeight: "1220px" }}>
                    <div className="landing">
                        <MainInfo />
                        {/* ✅ Removed duplicate Spline component */}
                    </div>
                </div>
                <About />
                <Stats />
                <Guide />
            </div>

            {/* ✅ Event Timeline Section */}
            <div className="timeline-section">
                <h1 style={{ textAlign: "center", color: "white" }}>Event Timeline</h1>
                <EventTimeline />
            </div>

            {/* ✅ Only One T-Shirt */}
            <div className="tshirt-section">
                <h1 style={{ textAlign: "center", color: "white" }}>MERCH PRODUCT 🛍️</h1>
                <Tshirt />
            </div>

            {/* ✅ Guest Speakers Section */}
            <div className="guest-speakers-section">
                <GuestSpeakersSchedule />
            </div>

            <Footer />

            {/* ✅ Chatbot Fixed Position */}
            <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
                <Chatbot />
            </div>
        </>
    );
};

export default App;
