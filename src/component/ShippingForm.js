import React, { Component } from "react";
import "./ShippingForm.css";

class ShippingForm extends Component {
  state = {};
  render() {
    return (
      <div className="shipping-form__container">
        <div className="shipping-form__personal-information-container">
          <h4>Personal Information</h4>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="shipping-form__shipping-information-container">
          <h4>Shipping Information</h4>
          <div className="shipping-form__shipping-information-container-row">
            <div className="shipping-form__shipping-information-container-column">
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="State" />
            </div>

            <div className="shipping-form__shipping-information-container-column">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Zip Code" />
            </div>
          </div>
        </div>

        <button type="submit">Place Order</button>
      </div>
    );
  }
}

export default ShippingForm;
