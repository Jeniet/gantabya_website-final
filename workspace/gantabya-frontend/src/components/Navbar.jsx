import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Logo";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false); // new state for hiding navbar on scroll down
  const navigate = useNavigate();

  const lastScrollY = useRef(0);

  // Handle scroll events for navbar background and hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background toggle (your existing logic)
      const isScrolled = currentScrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // scrolling down & passed 50px => hide navbar
        setHidden(true);
      } else {
        // scrolling up => show navbar
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleSectionClick = (section) => {
    setShowDropdown(false);
    setIsMobileMenuOpen(false);
    navigate("/destinations", { state: { scrollTo: section } });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
      <Logo />

      <div
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setIsMobileMenuOpen(false)}
          className="nav-link"
        >
          About
        </Link>

        <div
          className="dropdown"
          onMouseEnter={() => !isMobileMenuOpen && setShowDropdown(true)}
          onMouseLeave={() => !isMobileMenuOpen && setShowDropdown(false)}
        >
          <button
            className={`nav-link ${showDropdown ? "active" : ""}`}
            aria-haspopup="true"
            aria-expanded={showDropdown}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Destinations
          </button>
          <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
            <li
              className="dropdown-item"
              onClick={() => handleSectionClick("trekking")}
            >
              Trekking
            </li>
            <li
              className="dropdown-item"
              onClick={() => handleSectionClick("adventure")}
            >
              Adventure
            </li>
          </ul>
        </div>

        <Link
          to="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="nav-link"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
