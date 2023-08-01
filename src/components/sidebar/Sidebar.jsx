import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import closeIcon from "../../data/assets/shared/icon-close.svg";


const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <div className="sidebar__close" onClick={onClose}>
      <img src={closeIcon} alt="Close" />
    </div>
      <div className="sidebar__list">
      <NavLink className="sidebar__item" to="/" activeClassName="active">
          <span className="sidebar__number">00</span> HOME
        </NavLink>

        <NavLink className="sidebar__item" to="/destination" activeClassName="active">
          <span className="sidebar__number">01</span> DESTINATION
        </NavLink>

        <NavLink className="sidebar__item" to="/crew" activeClassName="active">
          <span className="sidebar__number">02</span> CREW
        </NavLink>

        <NavLink className="sidebar__item" to="/technology" activeClassName="active">
          <span className="sidebar__number">03</span> TECHNOLOGY
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
