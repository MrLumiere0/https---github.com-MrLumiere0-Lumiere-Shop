import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components.js/homepage";
import Navigation from "./components.js/Navigation";
import Footer from "./components.js/footer";
import Login from "./components.js/Login";
import ShopPage from "./components.js/Shopping/shop";

function Shop() {
  return (
    <div>
      <h2>Shop</h2>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/shop' element={<ShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
