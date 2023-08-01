import { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./technology.scss";
import data from "../../data/data.json";

export const Technology = () => {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = technology[value];

  return (
    <>
      <div className="technology">
        <Navbar />
        <div className="technology__container">
          <div className="technology__left">
            <div className="technology__title">
              <span className="technology__number">03</span>
              <span className="technology__space">SPACE LAUNCH 101</span>
            </div>

            <div className="technology__all">
              <ul className="technology__item">
                {technology.map((item, index) => (
                  <button
                    key={index}
                    className={value === index ? "button-selected" : ""}
                    onClick={() => setValue(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </ul>

              <div className="technology__info">
                <p className="technology__span">THE TERMINOLOGY...</p>
                <p className="technology__name">{name.toUpperCase()}</p>
                <p className="technology__description">{description}</p>
              </div>
            </div>
          </div>

          <div className="technology__image">
            <img src={images.portrait} alt={name} />
          </div>
          <div className="technology__image__lands">

            <img src={images.landscape} alt={name} />

          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
