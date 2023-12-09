import React from "react";
import EmptyCart from "../img/cart/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className='empty-cart-container'>
      <img src={EmptyCart} alt='empty-cart-image' />
      <p>your cart is empty</p>
      <button className='open-cart'>open cart</button>
    </div>
  );
};

export default EmptyCart;
