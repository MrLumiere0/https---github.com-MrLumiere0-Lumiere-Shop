import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const UserContext = React.createContext();

export function UserProvider({ children }) {
  const parsedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(parsedUser);

  const [cartData, setCartData] = useState([]);

  const setLoginUser = (userObj) => {
    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
  };
  //get current user id
  const uid = user?.user.uid;

  const cartListRef = collection(db, "Cart" + uid);
  useEffect(() => {
    const getCartData = async () => {
      try {
        const data = await getDocs(cartListRef);
        const parsedData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCartData(parsedData);
      } catch (error) {}
    };

    getCartData();
  }, [cartData.length]);

  return (
    <UserContext.Provider value={{ user, setLoginUser, cartData }}>
      {children}
    </UserContext.Provider>
  );
}

// implement cachin for logged In boolean and have it where
// the user has to log out to clear it.
