import React from "react";
import "../../App.css";

export default function ProductCard({ ...product }) {
  return (
    <div className='card'>
      <div className='productIMG'>
        <img />
      </div>
      <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <div>
        <button>Add to Cart</button>
        <p>Quantity: </p>
      </div>
    </div>
  );
}
