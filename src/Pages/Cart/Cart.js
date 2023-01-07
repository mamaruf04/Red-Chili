import React from "react";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const {cart} = useCart();

  
    console.log(cart);

  return (
    <div>
      <h1>this is cart</h1>
    </div>
  );
};

export default Cart;
