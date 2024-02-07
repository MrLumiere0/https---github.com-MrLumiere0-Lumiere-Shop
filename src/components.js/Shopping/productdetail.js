import React, { useEffect, useState } from "react";
import { collectionGroup, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useParams } from "react-router-dom";
import rhude from "../../assets/rhude.jpg";
import { Link } from "react-router-dom";

export default function ProductDetailComp() {
  const [detailtData, setDetailData] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getProductData = async () => {
      try {
        const singleProductRef = doc(db, "Products", id);
        console.log(singleProductRef, "produc ref");

        const docSnap = await getDoc(singleProductRef);
        if (docSnap.exists) {
          console.log(docSnap.data());
          setDetailData(docSnap.data());
        }
        // const parsedData = data.docs.map((doc) => ({
        //   ...doc.data(),
        //   id: doc.id,
        // }));
      } catch (err) {
        console.log("error", err);
      }
    };
    getProductData();
  }, []);

  return (
    <div className='card'>
      <p>H</p>
      <div>
        <img src={rhude} className='productIMG' />
      </div>
      <div key={detailtData.id}>
        <p className='name'>{detailtData.name}</p>
        <p className='descr'>
          <Link to={`/shop/${detailtData.id}`} className='description'>
            {detailtData.description}
          </Link>
        </p>
        <p className='price'>${detailtData.price}</p>
      </div>
      <div class>
        <button type='submit' className='addbutton'>
          Add to Cart
        </button>
        <p className='quant'>Quantity: {detailtData.quantity}</p>
      </div>
      <div className='sku'>
        <p>SKU:{detailtData.sku}</p>
      </div>
    </div>
  );
}

// When you click
