import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="landing"
      style={{ 
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(6, 22, 40, 0.9)), url(${heroImage})`
      }}
    >
      {/* Mountain-themed floating elements */}
      <div className="floating-element floating-1"></div>
      <div className="floating-element floating-2"></div>
      <div className="floating-element floating-3"></div>

      <div className="overlay">
        <h1>Gantabya Ghumau Nepal</h1>
        <p>Discover Your Adventure</p>
        <button onClick={() => navigate("/destinations")}>
          Explore
        </button>
      </div>
    </div>
  );
};

export default Landing;