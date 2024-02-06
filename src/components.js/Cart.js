import React from "react";

export default function CartPage() {
  function cartPageItem() {
    return (
      <div className='cartcard'>
        <p>H</p>
        {/* <div>
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
        </div>
        <div className='sku'></div>
        {product.quantity * product.price} */}
      </div>
    );
  }

  function checkOutModal() {
    return (
      <div className='order'>
        <h2>Thank you for your order!</h2>
      </div>
    );
  }

  return (
    <div className='cartpage'>
      <div>
        <p>Cart:{}</p>
      </div>

      <div>
        <h2>Subtotal:</h2>
        <button type='submit'>Checkout</button>
      </div>
    </div>
  );
}
