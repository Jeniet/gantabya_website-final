import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Destinations.css";

// Import local images
import jugal from "../assets/Destinations/Trekking/jugal.jpg";
import numur from "../assets/Destinations/Trekking/numur.jpg";
import panchPokhari from "../assets/Destinations/Trekking/panchPokhari.jpg";
import bhairabKunda from "../assets/Destinations/Trekking/bhairabKunda.jpg";
import tahoRolpa from "../assets/Destinations/Trekking/tahoRolpa.jpg";
import deudhungaTrek from "../assets/Destinations/Trekking/deudhungaTrek.jpg";
import amaYangriSermathangTrek from "../assets/Destinations/Trekking/amaYangriSermathangTrek.jpg";

const trekkingDestinations = [
  {
    name: "Jugal Base Camp",
    image: jugal,
    desc: "Sindhupalchok",
    details:
      "Jugal Base Camp is a beautiful trekking destination in Sindhupalchok, offering stunning mountain views, rich culture, and a peaceful environment. The trek passes through traditional villages and lush forests, making it perfect for adventure seekers and nature lovers.",
  },
  {
    name: "Numur Himal trek",
    image: numur,
    desc: "Ramachhape",
    details:
      "Numur Himal trek in Ramachhape is known for its pristine landscapes, remote trails, and breathtaking Himalayan vistas. The route is less crowded, providing an authentic trekking experience with opportunities to explore local culture.",
  },
  {
    name: "Panchpokhari trek",
    image: panchPokhari,
    desc: "Sindhupalchok",
    details:
      "Panchpokhari trek takes you to five sacred lakes nestled in the Himalayas. This trek is both a spiritual and scenic journey, with panoramic mountain views and encounters with local Tamang and Sherpa communities.",
  },
  {
    name: "Vairab kunda Trek",
    image: bhairabKunda,
    desc: "Sindhupalchok",
    details:
      "Vairab Kunda Trek is a pilgrimage as well as an adventure trek to a holy lake at high altitude. The trail offers spectacular views of the Himalayas and a chance to experience the unique culture of the region.",
  },
  {
    name: "Taho-rolpa lake Trek",
    image: tahoRolpa,
    desc: "Dolakha Rolwaling valley",
    details:
      "Tsho Rolpa Lake Trek in Dolakha's Rolwaling valley is famous for its glacial lake, dramatic landscapes, and views of Gaurishankar Himal. The trek is challenging and rewarding for those seeking off-the-beaten-path adventures.",
  },
  {
    name: "Deudhanga Trek",
    image: deudhungaTrek,
    desc: "Bigu  Dolakha",
    details:
      "Deudhunga Trek in Bigu, Dolakha, is a lesser-known route featuring beautiful forests, traditional villages, and tranquil surroundings. It's ideal for trekkers looking for solitude and natural beauty.",
  },
  {
    name: "Ama Yangri and Sermathang trek",
    image: amaYangriSermathangTrek,
    desc: "Sindhupalchok  melamchi",
    details:
      "Ama Yangri and Sermathang trek offers panoramic views of the Himalayas, Buddhist monasteries, and vibrant local culture. The trail is accessible and suitable for trekkers of all levels.",
  },
];

const adventureDestinations = [
  {
    name: "",
    image: "",
    desc: "",
    details: "",
  },
  {
    name: "",
    image: "",
    desc: "",
    details: "",
  },
  {
    name: "",
    image: "",
    desc: "",
    details: "",
  },
];

const Destinations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const trekkingRef = useRef(null);
  const adventureRef = useRef(null);

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (location.state?.scrollTo === "trekking") {
      trekkingRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (location.state?.scrollTo === "adventure") {
      adventureRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  const handleCardClick = (place) => {
    setSelected(place);
  };

  const handleClose = () => {
    setSelected(null);
  };

  const handleBookNow = () => {
    navigate("/contact");
  };

  return (
    <div className="destination-page">
      {/* Floating decorative elements */}
      <div className="floating-element floating-1"></div>
      <div className="floating-element floating-2"></div>
      <div className="floating-element floating-3"></div>

      <h2>Explore Destinations</h2>

      <div className="destination-section" ref={trekkingRef} id="trekking">
        <h3 className="section-title">Trekking Destinations</h3>
        <div className="destination-list">
          {trekkingDestinations.map((place, i) => (
            <div
              className="destination-card"
              key={i}
              onClick={() => handleCardClick(place)}
              style={{ cursor: "pointer" }}
            >
              <img src={place.image} alt={place.name} />
              <div className="info">
                <h4>{place.name}</h4>
                <p>{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="destination-section" ref={adventureRef} id="adventure">
        <h3 className="section-title">Adventure Destinations</h3>
        <div className="destination-list">
          {adventureDestinations.map((place, i) => (
            <div
              className="destination-card"
              key={i}
              onClick={() => handleCardClick(place)}
              style={{ cursor: "pointer" }}
            >
              <img src={place.image} alt={place.name} />
              <div className="info">
                <h4>{place.name}</h4>
                <p>{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selected && (
        <div className="destination-modal-overlay" onClick={handleClose}>
          <div
            className="destination-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={handleClose}>
              &times;
            </button>
            <img src={selected.image} alt={selected.name} />
            <h4>{selected.name}</h4>
            <p style={{ fontWeight: 500, color: "#888" }}>{selected.desc}</p>
            <p style={{ margin: "18px 0" }}>{selected.details}</p>
            <button className="book-now-btn" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;
