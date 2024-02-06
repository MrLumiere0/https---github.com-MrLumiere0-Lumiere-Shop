import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useParams } from "react-router-dom";

export default function ProductDetailComp() {
  const [detailtData, setDetailData] = useState([]);
  const productListRef = collection(db, "Products");
  const { sku } = useParams();

  // useEffect(() => {
  //   const getProductData = async () => {
  //     try {
  //       const data = await getDocs(productListRef);
  //       const parsedData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       console.log(parsedData);
  //     } catch (err) {
  //       console.log("error");
  //     }
  //   };
  //   getProductData();
  // }, []);

  return (
    <div className='card'>
      <p>{sku}</p>
      {/* //     <div>
  //       <img src={rhude} className='productIMG' />
  //     </div>
  //     <div key={product.sku}>
  //       <p className='name'>{product.name}</p>
  //       <p className='descr'>
  //         <Link to={`/shop/${product.sku}`} className='description'>
  //           {product.description}
  //         </Link>
  //       </p>
  //       <p className='price'>${product.price}</p>
  //     </div>
  //     <div class>
  //       <button type='submit' className='addbutton'>
  //         Add to Cart
  //       </button>
  //       <p className='quant'>Quantity: {product.quantity}</p>
  //     </div>
  //     <div className='sku'>
  //       <p>SKU:{product.sku}</p>
  //     </div> */}
    </div>
  );
}

// When you click
