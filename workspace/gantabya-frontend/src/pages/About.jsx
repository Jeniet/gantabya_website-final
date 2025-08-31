import React from "react";
import "./About.css";
import sagarImg from "../assets/sagar.jpg";
import jenietImg from "../assets/jeniet.jpg";
import dhirendraImg from "../assets/dhirendra.jpg";

const team = [
  {
    name: "Sagar Acharya",
    role: "Travel Guide || Founder",
    image: sagarImg,
  },
  {
    name: "Saurav Gautam (Jeniet)",
    role: "Developer || IT Head",
    phone: "+977-9842065426",
    image: jenietImg,
  },
  {
    name: "Dhirendra Tamrakar",
    role: "Travel Guide || President",
    image: dhirendraImg,
  },
];

const activities = [
  {
    title: "Trekking Adventures",
    description:
      "Explore Nepal's majestic Himalayas with our expertly guided treks through iconic trails like Everest Base Camp, Annapurna Circuit, and Langtang Valley.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Adventure Activities",
    description:
      "Experience Nepal's thrilling adventures including white-water rafting, paragliding, bungee jumping, and jungle safaris in Chitwan National Park.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13 2v10h8V8c0-3.31-2.69-6-6-6h-2zm-2 0H7C3.69 2 1 4.69 1 8v4h10V2zm10 12H1v4c0 3.31 2.69 6 6 6h10c3.31 0 6-2.69 6-6v-4z" />
      </svg>
    ),
  },
];

const commitments = [
  {
    title: "Authentic Experiences",
    description:
      "We connect travelers with genuine Nepalese culture and traditions through carefully curated experiences.",
  },
  {
    title: "Sustainable Tourism",
    description:
      "Our practices ensure minimal environmental impact while supporting local communities.",
  },
  {
    title: "Expert Guidance",
    description:
      "Our certified guides ensure your safety while sharing their deep knowledge of Nepal.",
  },
];

const About = () => {
  return (
    <div className="about-container">
      {/* Enhanced Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="glass-hero">
            <p className="hero-desc">
              Discover Your Adventure in the Himalayas
            </p>

            <div className="social-icons">
              <a
                href="https://www.youtube.com/@Ghumnehonepal"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <div className="icon-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </div>
              </a>

              <a
                href="https://www.instagram.com/gantabya__ghumaunepal/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <div className="icon-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>

              </a>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </section>

      {/* About Content Section */}
      <section className="about-content-section">
        <div className="content-card glass-card">
          <h2>About Gantabya Ghumau Nepal</h2>
          <p>
            Gantabya Ghumau Nepal is your ultimate guide to exploring the
            breathtaking beauty and rich culture of Nepal. We aim to provide
            travelers with authentic experiences, insightful tips, and curated
            destinations that highlight the diversity of this incredible
            country.
          </p>
          <p>
            Our mission is to inspire wanderlust and promote sustainable tourism
            by connecting visitors with local communities and hidden gems across
            Nepal.
          </p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <h2>Our Adventure Experiences</h2>
        <p className="section-subtitle">
          Explore Nepal with our specialized activities
        </p>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div className="activity-card glass-card" key={index}>
              <div className="activity-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Expert Team</h2>
        <p className="section-subtitle">
          Passionate professionals dedicated to your Nepalese adventure
        </p>

        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card glass-card" key={index}>
              <div className="member-photo">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                {member.phone && (
                  <p className="contact-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                    </svg>
                    {member.phone}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section">
        <h2>Our Commitment to You</h2>
        <p className="section-subtitle">
          We promise an unforgettable experience in Nepal
        </p>

        <div className="commitment-grid">
          {commitments.map((commitment, index) => (
            <div className="commitment-card glass-card" key={index}>
              <div className="commitment-number">0{index + 1}</div>
              <h3>{commitment.title}</h3>
              <p>{commitment.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
