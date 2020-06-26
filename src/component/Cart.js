import React, { Component } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import CART_ITEMS from "../CART_DATA";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="cart__container">
        <h2>Order Summary</h2>{" "}
        {CART_ITEMS.map((item) => (
          <CartItem
            key={item.productId}
            name={item.name}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
        <h3>Items: 7</h3>
        <h3>Total: Rs.18999</h3>
      </div>
    );
  }
}

export default Cart;
