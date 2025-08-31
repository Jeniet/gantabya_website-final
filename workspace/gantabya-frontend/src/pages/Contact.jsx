// src/pages/Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Floating decorative elements */}
      <div className="floating-element floating-1"></div>
      <div className="floating-element floating-2"></div>
      <div className="floating-element floating-3"></div>
      
      <form className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;