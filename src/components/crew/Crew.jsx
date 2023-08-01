import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import Navbar from "../navbar/Navbar";
import "./crew.scss";

import data from "../../data/data.json";

export default function Crew() {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crew[value];

  const handleButtonClick = (index) => {
    setValue(index);
  };

  return (
    <>
      <section className="crew">
        <Navbar />
        <div className="crew__container container">
          <article className="crew__left">

            <div className="crew__title">
              <span className="crew__number">02</span>
              <span className="crew__meet"> MEET YOUR CREW</span>
            </div>

            <div className="crew__info">
            <br />
              <span className="crew__role">{role}</span>
              <span className="crew__name">{name.toUpperCase()}</span>
              <p className="crew__bio">{bio}</p>
            </div>
            <br />
            <ul className="crew__ul">
          {crew.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleButtonClick(index)}
                className={index === value ? "white" : ""}
              >
                <BsCircleFill />
              </button>
            </li>
          ))}
        </ul>
          </article>

          <article className="crew__image">
            <img src={images.png} alt={name} title={name} />
          </article>
        </div>
      </section>
    </>
  );
}
