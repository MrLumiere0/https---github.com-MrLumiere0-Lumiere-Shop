import React, { useState } from "react";
import { createContext } from "react";
import { auth } from "../config/firebase";

export const UserContext = React.createContext();

export function UserProvider({ children }) {
  const parsedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(parsedUser);

  const setLoginUser = (userObj) => {
    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
  };

  return (
    <UserContext.Provider value={{ user, setLoginUser }}>
      {children}
    </UserContext.Provider>
  );
}

// implement cachin for logged In boolean and have it where
// the user has to log out to clear it.
