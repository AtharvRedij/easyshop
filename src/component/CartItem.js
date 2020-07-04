import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  handleAddItemToCart,
  handleDecreaseItemQuantity,
} from "../store/actions/cart";
import "./CartItem.css";

const CartItem = ({
  productId,
  name,
  imageUrl,
  quantity,
  itemsInStock,
  price,
  uid,
  dispatch,
}) => {
  return (
    <div className="cart-item__container">
      <img className="cart-item__image" src={imageUrl} alt={name} />
      <div className="cart-item__name">{name}</div>
      <div className="cart-item__quantity-container">
        <div
          className="cart-item__quantity-decrease"
          onClick={() =>
            dispatch(handleDecreaseItemQuantity(productId, uid, quantity))
          }
        >
          -
        </div>
        <div>{quantity}</div>
        <div
          className="cart-item__quantity-increase"
          onClick={() => {
            if (quantity < itemsInStock) {
              dispatch(handleAddItemToCart(productId, uid, quantity));
            } else {
              toast.info(`Only ${itemsInStock} items in stock`);
            }
          }}
        >
          +
        </div>
      </div>

      <div className="cart-item__total-price"> {quantity * price}</div>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    uid: user.uid,
  };
};

export default connect(mapStateToProps)(CartItem);
