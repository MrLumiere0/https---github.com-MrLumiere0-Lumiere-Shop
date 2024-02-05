import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import DropDownMenu from "./priceSort";
import ProductCard from "./productCard";
import { db } from "../../config/firebase";

export default function ShopPage() {
  const [productData, setProductData] = useState([]);
  const [sort, setSort] = useState("");

  const productListRef = collection(db, "Products");

  useEffect(() => {
    const getProductData = async () => {
      try {
        const data = await getDocs(productListRef);
        const parsedData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(parsedData);
        setProductData(parsedData);
      } catch (err) {
        console.log("error");
      }
    };
    getProductData();
  }, []);

  async function handleSort(option) {
    try {
      let type = option.value;
      setSort(type);
      const data = await getDocs(productListRef);
      const parsedData = data.docs.map((doc) => ({
        ...doc.data(),
      }));

      if (type === "price") {
        console.log("price");
        parsedData.sort((a, b) => a.price - b.price);
      } else if (type === "atoz") {
        console.log("atoz");
        parsedData.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (type === "ztoa") {
        console.log("ztoa");
        parsedData.sort((a, b) => (a.name > b.name ? -1 : 1));
      } else {
        parsedData.sort();
      }
      setProductData(parsedData);
    } catch {
      console.log("err");
    }
  }

  return (
    <div className='shop'>
      <div className='filter'>
        <DropDownMenu sorttype={sort} onSelect={(e) => handleSort(e.target)} />
      </div>
      <div className='products'>
        {productData.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
}
