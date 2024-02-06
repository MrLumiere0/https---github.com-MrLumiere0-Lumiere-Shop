import React, { useContext, useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { auth } from "../config/firebase";
import { UserContext } from "../Context.js/UserContext";
import { signOut } from "firebase/auth";

function Logout() {
  const userLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      window.location.href = "/login";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button className='logout' onClick={userLogout}>
        Logout
      </button>
    </>
  );
}

export default function UserButton() {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <div className='userbutton'>
        <Logout />
        <button type='submit' className='cart'>
          Cart
        </button>
      </div>
    );
  } else {
    return (
      <NavLink
        to='/login'
        className={({ isActive }) => (!isActive ? "notactive" : "active")}
      >
        Login
      </NavLink>
    );
  }
}
