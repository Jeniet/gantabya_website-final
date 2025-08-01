// src/pages/Contact.jsx
import React from "react";
import "./Contact.css";
import sagarImg from "../assets/sagar.jpg";
import jenietImg from "../assets/jeniet.jpg";
import dhirendraImg from "../assets/dhirendra.jpg";

const team = [
  {
    name: "Sagar Acharya",
    role: "Travel Guide || Owner",
    image: sagarImg,
    socials: {
      facebook: "https://www.facebook.com/sagara.acarya.940106",
      tiktok: "www.tiktok.com/@gantbya22",
    },
  },
  {
    name: "Saurav Gautam (Jeniet)",
    role: "Developer || IT Head",
    phone: "+977-9842065426",
    image: jenietImg,
    socials: {
      facebook: "https://www.facebook.com/je.niet.630768",
      tiktok: "https://www.tiktok.com/search?q=gantabya%20ghumau%20nepal&t=1753960239543",
    },
  },
  {
    name: "Dhirendra Tamrakar",
    role: "Travel Guide || President",
    image: dhirendraImg,
    socials: {
      facebook: "https://www.facebook.com/dhirendra.tamrakar.7",
      tiktok: "hhttps://www.tiktok.com/search?q=gantabya%20ghumau%20nepal&t=1753960239543",
    },
  },
];

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Meet Our Team</h2>
      <div className="card-wrapper">
        {team.map((member, index) => (
          <div className="contact-card" key={index}>
            <div className="photo-frame">
              <img src={member.image} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>
              <strong>Role:</strong>{" "}
              <a href={`mailto:${member.role}`}>{member.role}</a>
            </p>
            <p>
              
            </p>
            <div className="socials">
              <a
                href={member.socials.facebook}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href={member.socials.tiktok}
                target="_blank"
                rel="noreferrer"
              >
                Tiktok
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
