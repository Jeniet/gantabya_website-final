import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>About Gantabya Ghumau Nepal</h2>
        <p>
          Gantabya Ghumau Nepal is your ultimate guide to exploring the breathtaking beauty and rich culture of Nepal.
          We aim to provide travelers with authentic experiences, insightful tips, and curated destinations that highlight
          the diversity of this incredible country.
        </p>
        <p>
          Our mission is to inspire wanderlust and promote sustainable tourism by connecting visitors with local communities
          and hidden gems across Nepal.
        </p>
      </div>
      <div className="about-image">
        <img src={require('../assets/about-nepal.jpg')} alt="Nepal Landscape" />
      </div>
    </section>
  );
};

export default About;
