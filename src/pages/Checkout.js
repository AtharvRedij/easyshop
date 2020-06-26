import React, { Component } from "react";
import ShippingForm from "./../component/ShippingForm";
import Cart from "../component/Cart";
import "./Checkout.css";

class Checkout extends Component {
  state = {};
  render() {
    return (
      <div className="checkout__container">
        <ShippingForm />
        <Cart />
      </div>
    );
  }
}

export default Checkout;
