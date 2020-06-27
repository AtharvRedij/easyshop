import React from "react";
import "./CartItem.css";

const CartItem = ({ name, imageUrl, quantity, price }) => {
  return (
    <div className="cart-item__container">
      <img className="cart-item__image" src={imageUrl} alt={name} />
      <div className="cart-item__name">{name}</div>
      <div className="cart-item__quantity-container">
        <div>-</div>
        <div>{quantity}</div>
        <div>+</div>
      </div>

      <div className="cart-item__total-price"> {quantity * price}</div>
    </div>
  );
};

export default CartItem;
