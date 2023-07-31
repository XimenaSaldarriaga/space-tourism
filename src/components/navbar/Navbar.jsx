import React from "react";
import logo from "../../data/assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar__hr">
        <hr />
      </div>

      <div className="navbar__list">

          <NavLink
            className="navbar__item"
            to="/"
            activeClassName="active"
          >
            <span className="navbar__number">00</span> HOME
          </NavLink>
          
          <NavLink
            className="navbar__item"
            to="/destination"
            activeClassName="active"
          >
            <span className="navbar__number">01</span> DESTINATION
          </NavLink>

          <NavLink
            className="navbar__item"
            to="/crew"
            activeClassName="active"
          >
            <span className="navbar__number">02</span> CREW
          </NavLink>

          <NavLink
            className="navbar__item"
            to="/technology"
            activeClassName="active"
          >
            <span className="navbar__number">03</span> TECHNOLOGY
          </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
