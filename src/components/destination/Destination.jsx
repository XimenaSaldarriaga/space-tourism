import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./destination.scss";
import data from "../../data/data.json";

export const Destination = () => {
  const [planets] = useState(data.destinations);
  const [activeIndex, setActiveIndex] = useState(0);

  const { name, images, description, distance, travel } = planets[activeIndex];

  return (
    <div className="destinationContainer">
      <Navbar />
      <div className="destination">
        <article className="destination__article">
          <div className="destination__title">
            <span className="destination__number">01</span>
            <span className="destination__pick">PICK YOUR DESTINATION</span>
          </div>
          <img
            className="destination__image"
            src={images.png}
            alt={name}
            title={name}
          />
        </article>

        <article className="destination__article2">
          <ul className="destination__nav">
            {planets.map((item, index) => (
              <li
                className={`destination__button ${index === activeIndex ? 'active' : ''}`}
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                {item.name}
              </li>
            ))}
          </ul>

          <h2 className="destination__name">{name}</h2>

          <p>{description}</p>

          <hr></hr>

          <div className="destination__dates">
            <div className="destination__distance">
              <span className="destination__distance--span">AVG. DISTANCE </span>
              <span className="destination__distance--time">{distance}</span>
            </div>
            <div className="destination__distance">
              <span className="destination__distance--span">EST. TRAVEL TIME</span>
              <span className="destination__distance--time">{travel}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Destination;

