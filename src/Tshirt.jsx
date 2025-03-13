import React from "react";
import Spline from "@splinetool/react-spline";
import "./App.css"; // Ensure this file contains `.tshirt-container` styles

const Tshirt = () => {
    return (
        <div className="tshirt-container">
            <Spline scene="https://prod.spline.design/eQVHJFKCxwuuXWmE/scene.splinecode" />

        </div>
    );
};

export default Tshirt;
