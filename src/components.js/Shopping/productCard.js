import React from "react";
import "../../App.css";
import rhude from "../../assets/rhude.jpg";
import { Link } from "react-router-dom";

export default function ProductCard({ ...product }) {
  return (
    <div className='card'>
      <div>
        <img src={rhude} className='productIMG' />
      </div>
      <div key={product.sku}>
        <p className='name'>{product.name}</p>
        <p className='descr'>
          <Link to={`/shop/${product.sku}`} className='description'>
            {product.description}
          </Link>
        </p>
        <p className='price'>${product.price}</p>
      </div>
      <div class>
        <button type='submit' className='addbutton'>
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
