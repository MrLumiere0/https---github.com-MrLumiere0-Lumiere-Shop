import React, { useContext } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import UserButton from "./userButton";
import { UserContext } from "../Context.js/UserContext";
import { computeHeadingLevel } from "@testing-library/react";

export default function Navigation() {
  return (
    <div className='navholder'>
      <nav className='nav'>
        <NavLink
          className={({ isActive }) => (!isActive ? "notactive" : "active")}
          to='/shop'
        >
          SHOP
        </NavLink>
        <UserButton />
      </nav>
    </div>
  );
}
