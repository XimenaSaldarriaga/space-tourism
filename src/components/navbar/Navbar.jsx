import React from "react";
import logo from "../../data/assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="logo"></img>
      </div>

      <div className="navbar__hr">
      <hr></hr>
      </div>

      <ul className="navbar__list">
        <li>
          <NavLink className="navbar__item" to="/">
            <span className="navbar__number">00</span> HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__item"
            to="/destination"
          >
            <span className="navbar__number">01</span> DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__item"
            to="/crew"
          >
            <span className="navbar__number">02</span> CREW
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__item"
            to="/technology"
          >
            <span className="navbar__number">03</span> TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;