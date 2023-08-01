import React, { useState } from "react";
import logo from "../../data/assets/shared/logo.svg";
import hamburgerIcon from "../../data/assets/shared/icon-hamburger.svg";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="logo" width={40}/>
      </div>

      <div className="navbar__hr">
        <hr />
      </div>

      <div className={`navbar__list ${showSidebar ? "show" : ""}`}>
        <NavLink className="navbar__item" to="/" activeClassName="active">
          <span className="navbar__number">00</span> HOME
        </NavLink>

        <NavLink className="navbar__item" to="/destination" activeClassName="active">
          <span className="navbar__number">01</span> DESTINATION
        </NavLink>

        <NavLink className="navbar__item" to="/crew" activeClassName="active">
          <span className="navbar__number">02</span> CREW
        </NavLink>

        <NavLink className="navbar__item" to="/technology" activeClassName="active">
          <span className="navbar__number">03</span> TECHNOLOGY
        </NavLink>
      </div>

      <div className={`navbar__hamburger ${showSidebar ? "show" : ""}`} onClick={handleToggleSidebar}>
        <img src={hamburgerIcon} alt="Hamburger" width={30}/>
      </div>

      <Sidebar isOpen={showSidebar} onClose={handleToggleSidebar} />
    </nav>
  );
};

export default Navbar;

