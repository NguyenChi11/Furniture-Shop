import React from "react";
import "./Sidebars.css";
import { NavLink } from "react-router-dom";

const Sidebars = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <i class="fa-regular fa-square-plus"></i>
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <i class="fa-regular fa-calendar-check"></i>
          <p>List Items</p>
        </NavLink>
        <NavLink to="/order" className="sidebar-option">
          <i class="fa-regular fa-calendar-check"></i>
          <p>Order Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebars;
