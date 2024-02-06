import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components.js/homepage";
import Navigation from "./components.js/Navigation";
import Footer from "./components.js/footer";
import Login from "./components.js/Login";
import ShopPage from "./components.js/Shopping/shop";
import ProductDetailComp from "./components.js/Shopping/productdetail";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import CartPage from "./components.js/Cart";

function App() {
  const [productData, setProductData] = useState([]);
  const productListRef = collection(db, "Products");

  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route exact path='/shop/:sku' element={<ProductDetailComp />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
