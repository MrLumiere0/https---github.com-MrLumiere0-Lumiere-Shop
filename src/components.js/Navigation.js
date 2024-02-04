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
          className={({ isActive }) => (isActive ? "notactive" : "active")}
        >
          SHOP
        </NavLink>
        <UserButton />
      </nav>
    </div>
  );
}

// // Behavior:
// will stay at the top of the app
// // Props:
// whether the user in logged in:

// 1: change the output of the sign in button with the shopping cart button
// 2.pass in authenticated user props to determine whether user is signed in

// function AddToCartButt (){
//     return (
// <button className="cartButton" onClick = "" >Add to Cart</button>
//     );
// }

// function SoldOutButt (){
// return (
// <button className="cartButton-sold-out" onClick = "" >Sold Out</button>
// );
