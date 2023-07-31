import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import Navbar from "../navbar/Navbar";
import "./crew.scss";

import data from "../../data/data.json";

export default function Crew() {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crew[value];

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
              <span className="crew__role">{role}</span>
              <span className="crew__name">{name.toUpperCase()}</span>
              <p className="crew__bio">{bio}</p>
            </div>
            <ul className="crew__ul">
              {crew.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setValue(index)}
                    className={`${index === value}`}
                  >
                    <BsCircleFill />
                  </button>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <img src={images.png} alt={name} title={name} />
          </article>
        </div>
      </section>
    </>
  );
}
