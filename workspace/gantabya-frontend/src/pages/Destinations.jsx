import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import pokhara from '../assets/pokhara.jpg';
import mustang from '../assets/mustang.jpg';
import jugal from '../assets/jugal.jpg';
import bungee from '../assets/bungee.jpg';
import paragliding from '../assets/paragliding.jpg';
import rafting from '../assets/rafting.jpg';
import './Destinations.css';

const trekkingDestinations = [
  {
    name: 'Pokhara',
    image: pokhara,
    desc: 'A lakeside paradise known for its stunning views of the Annapurna range, adventure sports, and peaceful vibes.',
  },
  {
    name: 'Mustang',
    image: mustang,
    desc: 'A hidden kingdom offering desert landscapes, ancient caves, and rich Tibetan culture high in the Himalayas.',
  },
  {
    name: 'Jugal Base Camp',
    image: jugal,
    desc: 'The trek to the Jugal Himal base camp leads close to Langshisa-Ri surrounded by staggering snow peaks.',
  },
];

const adventureDestinations = [
  {
    name: 'Bungee Jumping Bhote Koshi',
    image: bungee,
    desc: 'One of the world’s most thrilling bungee jumps over a fast-flowing river.',
  },
  {
    name: 'Paragliding in Pokhara',
    image: paragliding,
    desc: 'Soar above the lakeside city with epic views of the Himalayas.',
  },
  {
    name: 'White Water Rafting',
    image: rafting,
    desc: 'Conquer Nepal’s wild rivers with high adrenaline and wet fun.',
  },
];

const Destinations = () => {
  const location = useLocation();
  const trekkingRef = useRef(null);
  const adventureRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === 'trekking') {
      trekkingRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.state?.scrollTo === 'adventure') {
      adventureRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  return (
    <div className="destination-page">
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
