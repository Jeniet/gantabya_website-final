import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "./Logo.css";

function Logo() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current || currentScrollY <= 50) {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`logo-container ${hidden ? "hidden" : ""}`}>
      <Link to="/" className="logo-link">
        <img 
          src={logo} 
          alt="TravelNepal Logo" 
          className="logo-img"
          style={{ maxWidth: 'min(100%, 300px)' }}
        />
      </Link>
    </div>
  );
}

export default Logo;