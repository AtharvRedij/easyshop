import React from "react";
import { connect } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../store/actions/cart";
import "./CartItem.css";

const CartItem = ({ productId, name, imageUrl, quantity, price, dispatch }) => {
  return (
    <div className="cart-item__container">
      <img className="cart-item__image" src={imageUrl} alt={name} />
      <div className="cart-item__name">{name}</div>
      <div className="cart-item__quantity-container">
        <div
          className="cart-item__quantity-decrease"
          onClick={() => dispatch(decreaseItemQuantity(productId, quantity))}
        >
          -
        </div>
        <div>{quantity}</div>
        <div
          className="cart-item__quantity-increase"
          onClick={() => dispatch(increaseItemQuantity(productId))}
        >
          +
        </div>
      </div>

      <div className="cart-item__total-price"> {quantity * price}</div>
    </div>
  );
};

export default connect()(CartItem);
