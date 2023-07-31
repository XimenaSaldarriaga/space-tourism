import React from "react";
import Navbar from "../navbar/Navbar";
import "./home.scss";

export const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="space">
        <section className="space__text">
          <span className="space__travel">SO, YOU WANT TO TRAVEL TO</span>
          <span className="space__title">SPACE</span>
          <p className="space__lets">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <div className="space__explore">EXPLORE
        </div>
      </div>
    </div>
  );
};

export default Home;
