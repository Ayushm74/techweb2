import React, { useEffect } from "react";
import "./App.css";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/navbar/Navbar";
import MainInfo from "./components/mainInfo/MainInfo";
import About from "./components/about/About";
import Stats from "./components/stats/Stats";
import Guide from "./components/guide/Guide";
import Footer from "./components/footer/Footer";
import Chatbot from "./Chatbot"; // ✅ Chatbot component
import Tshirt from "./Tshirt"; // ✅ T-shirt component
import EventTimeline from "./EventTimeline"; // ✅ Event Timeline component

const App = () => {
    const animationUrl = "https://prod.spline.design/eQVHJFKCxwuuXWmE/scene.splinecode"; // ✅ Spline animation URL

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
                        <Spline id="animation" scene={animationUrl} /> {/* ✅ Corrected Spline integration */}
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
                <h1 style={{ textAlign: "center", color: "white" }}>Rotating T-Shirt 🛍️</h1>
                <Tshirt />
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
