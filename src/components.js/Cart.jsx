import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context.js/UserContext";
import rhude from "../assets/rhude.jpg";

export default function CartPage() {
  const { cartData } = useContext(UserContext);

  return (
    <div className='cartpage'>
      {cartData.map((product) => (
        <div className='cartcard' key={product.id}>
          {/* <p>{cartData?.length}</p> */}

          <div className='cartpdimg'>
            <img src={rhude} className='cartIMG' />
          </div>
          <div className='cartpd'>
            <div className='sec1'>
              <p>SKU:{product.sku}</p>
            </div>
            <div>
              <p className='cartprice'>${product.price}</p>
            </div>
            <div className='cartquantity'>
              <p className=''>Quantity: {product.quantity}</p>
              {/* select w/ options 1-9 max */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// function checkOutModal() {
//   return (
//     <div className='order'>
//       <h2>Thank you for your order!</h2>
//     </div>
//   );
// }

// return (
//   <div className='cartpage'>
//     <div>
//       <p>Cart:{}</p>
//     </div>

//     <div>
//       <h2>Subtotal:</h2>
//       <button type='submit'>Checkout</button>
//     </div>
//   </div>
// );
