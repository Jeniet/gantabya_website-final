import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg"; // adjust path if needed

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className="landing"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay">
        <h1>Gantabya Tours and Travels</h1>
        <p>Discover Your Adventure</p>
        <button onClick={() => navigate("/destinations")}>Explore Now</button>
      </div>
    </div>
  );
};

export default Landing;
