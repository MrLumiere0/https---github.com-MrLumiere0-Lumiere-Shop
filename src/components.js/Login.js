import React, { useContext } from "react";
import "../App.css";
import { auth } from "../config/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../Context.js/UserContext.js";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const { setLoginUser } = useContext(UserContext);

  const navigate = useNavigate();

  const userLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setLoginUser(user);
      navigate("/shop");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='loginpage'>
      <div className='loginmodal'>
        <div className='login_image'>
          <h2 id='welcome'>Welcome</h2>
        </div>
        <div className='login_section'>
          <h2>MY LUMIERE</h2>
          <form className='loginform' onSubmit={userLogin}>
            <input
              type='text'
              placeholder='Email...'
              className='loginInput'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              type='text'
              placeholder='Password...'
              className='loginInput'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button type='submit' className='formbutton'>
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// -Use Firebase Authentication
//  for user login and session management.

// -Store and retrieve user-related data from the
// users collection based on the authenticated user.

// Create a Context to manage the global
//user authentication:

// to pass on a prop to the userbutton element to display the user
// to have reference to that user cart
// to store a localstorage of the user being signed in as true  or false, if false retrn the login element and wipe the
