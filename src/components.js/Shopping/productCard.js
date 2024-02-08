import React, { useContext } from "react";
import "../../App.css";
import rhude from "../../assets/rhude.jpg";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context.js/UserContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function ProductCard({ ...product }) {
  const { user } = useContext(UserContext);

  const addToCart = async (product) => {
    if (user?.user.uid) {
      await setDoc(doc(db, "Cart" + user?.user.uid, product.id), product);
      alert("Product added!");
    } else alert("Please login");
  };

  return (
    <div className='card'>
      <div>
        <img src={rhude} className='productIMG' />
      </div>
      <div key={product.sku}>
        <p className='name'>{product.name}</p>
        <p className='descr'>
          <Link to={`/shop/${product.id}`} className='description'>
            {product.description}
          </Link>
        </p>
        <p className='price'>${product.price}</p>
      </div>
      <div class>
        <button onClick={() => addToCart(product)} className='addbutton'>
          Add to Cart
        </button>
        <p className='quant'>Quantity: {product.quantity}</p>
      </div>
      <div className='sku'>
        <p>SKU:{product.sku}</p>
      </div>
    </div>
  );
}
