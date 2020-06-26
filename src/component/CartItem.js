import React from "react";
import "./CartItem.css";

const CartItem = ({ name, imageUrl, quantity, price }) => {
  return (
    <div className="cart-item__container">
      <img src={imageUrl} alt={name} />
      <div>{name}</div>
      <div className="cart-item__quantity-container">
        <div>-</div>
        <div>{quantity}</div>
        <div>+</div>
      </div>

      <div>{quantity * price}</div>
    </div>
  );
};

export default CartItem;
