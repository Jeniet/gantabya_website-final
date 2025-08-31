import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Destinations.css";

const trekkingDestinations = [
  {
    name: "Jugal Base Camp",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Himalaya landscape Unsplash
    desc: "Sindhupalchok",
  },
  {
    name: "Numur Himal trek",
    image:
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=800", // Mountain view Pexels
    desc: "Ramachhape",
  },
  {
    name: "Panchpokhari trek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Panch_Pokhari_Sindhupalchowk.jpg", // Wikimedia Commons Panch Pokhari
    desc: "Sindhupalchok",
  },
  {
    name: "Vairab kunda Trek",
    image:
      "https://images.pexels.com/photos/6146270/pexels-photo-6146270.jpeg?auto=compress&w=800", // Mountain lake Pexels
    desc: "Sindhupalchok",
  },
  {
    name: "Taho-rolpa lake Trek",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tsho_Rolpa_Lake.jpg", // Wikimedia Commons Tsho Rolpa
    desc: "Dolakha Rolwaling valley",
  },
  {
    name: "Deudhanga Trek",
    image:
      "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&w=800", // Himalaya sunrise Pexels
    desc: "Bigu  Dolakha",
  },
  {
    name: "Ama Yangri and Sermathang trek",
    image:
      "https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?auto=format&fit=crop&w=800&q=80", // Himalaya landscape Unsplash
    desc: "Sindhupalchok  melamchi",
  },
];

const adventureDestinations = [
  {
    name: "",
    image: "",
    desc: "",
  },
  {
    name: "",
    image: "",
    desc: "",
  },
  {
    name: "",
    image: "",
    desc: "",
  },
];

const Destinations = () => {
  const location = useLocation();
  const trekkingRef = useRef(null);
  const adventureRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === "trekking") {
      trekkingRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (location.state?.scrollTo === "adventure") {
      adventureRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

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
            <div className="destination-card" key={i}>
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
            <div className="destination-card" key={i}>
              <img src={place.image} alt={place.name} />
              <div className="info">
                <h4>{place.name}</h4>
                <p>{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
