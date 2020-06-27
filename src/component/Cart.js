import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = (props) => {
  const { itemCount, totalPrice, cartItems } = props;

  return (
    <div className="cart__container">
      <h2>Order Summary</h2>{" "}
      {cartItems.map((item) => (
        <CartItem
          key={item.productId}
          productId={item.productId}
          name={item.name}
          imageUrl={item.imageUrl}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
      <h3>Items: {itemCount}</h3>
      <h3>Total: Rs.{totalPrice}</h3>
    </div>
  );
};

const mapStateToProps = ({ products, cart }) => {
  let itemCount = 0;
  let totalPrice = 0;
  const cartItems = [];

  const itemIDs = Object.keys(cart);
  const items = Object.values(cart);

  for (let i = 0; i < items.length; i++) {
    const productId = itemIDs[i];
    const quantity = items[i].quantity;
    const { name, imageUrl, price } = products[productId];

    itemCount += quantity;
    totalPrice += quantity * price;
    cartItems.push({
      productId,
      name,
      imageUrl,
      quantity,
      price,
    });
  }

  return {
    itemCount,
    totalPrice,
    cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
