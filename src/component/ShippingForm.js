import React, { Component } from "react";
import "./ShippingForm.css";

class ShippingForm extends Component {
  state = {};
  render() {
    return (
      <div className="shipping-form__container">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />
        <button type="submit">Place Order</button>
      </div>
    );
  }
}

export default ShippingForm;
