import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function ProductDetailComp() {
  const [productData, setProductData] = useState();

  // const productListRef = collection(db, "Products");

  // useEffect(() => {
  //   const getProductData = async () => {
  //     try {
  //       const data = await getDocs(productListRef);
  //       const parsedData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       console.log(parsedData);
  //       setProductData(parsedData);
  //     } catch (err) {
  //       console.log("error");
  //     }
  //   };
  //   getProductData();
  // }, []);

  // return (
  //   <div>
  //     <p>L</p>
  //   </div>
  // );
}
