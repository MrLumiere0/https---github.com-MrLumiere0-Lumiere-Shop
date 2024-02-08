import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context.js/UserContext";
import rhude from "../assets/rhude.jpg";

export default function CartPage() {
  const { cartData } = useContext(UserContext);

  return (
    <div className='cart'>
      <div className='cartcard'>
        {cartData.map((product) => (
          <div className='' key={product.id}>
            <p>{cartData?.length}</p>

            <div>
              <img src={rhude} className='cartIMG' />
            </div>
            <div>
              <p className='cartname'>{product.name}</p>
              <p>SKU:{product.sku}</p>
            </div>
            <div>
              <p className='cartprice'>${product.price}</p>
            </div>
            <div className='cartquantity'>
              <p className=''>Quantity: {product.quantity}</p>
              {/* select w/ options 1-9 max */}
            </div>
            <div className='sku'></div>
            {product.quantity * product.price}
          </div>
        ))}
      </div>
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
