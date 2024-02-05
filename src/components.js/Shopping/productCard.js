import React from "react";
import "../../App.css";
import rhude from "../../assets/rhude.jpg";
import { useEffect } from "react";
import getImageURL from "../../assets/utils";

export default function ProductCard({ ...product }) {
  return (
    <div className='card'>
      <div>
        <img src={rhude} className='productIMG' />
      </div>
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
      <div>
        <button>Add to Cart</button>
        <p>Quantity: {product.quantity}</p>
      </div>
      <div className='sku'>
        <p>SKU:{product.sku}</p>
      </div>
    </div>
  );
}
