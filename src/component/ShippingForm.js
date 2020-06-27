import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handlePlaceOrder } from "../store/actions/cart";
import "./ShippingForm.css";

class ShippingForm extends Component {
  state = {
    data: {
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
    },
  };

  handleInputChange = (event) => {
    const data = { ...this.state.data };
    data[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ data });
  };

  handleSubmit = () => {
    const { cart, dispatch } = this.props;
    const userInfo = this.state.data;

    dispatch(handlePlaceOrder(userInfo, cart));

    this.props.history.replace("/");
  };

  render() {
    const { name, email, address, city, state, zipcode } = this.state.data;

    return (
      <div className="shipping-form__container">
        <div className="shipping-form__personal-information-container">
          <h4>Personal Information</h4>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="shipping-form__shipping-information-container">
          <h4>Shipping Information</h4>
          <div className="shipping-form__shipping-information-container-row">
            <div className="shipping-form__shipping-information-container-column">
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={address}
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                placeholder="State"
                name="state"
                value={state}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="shipping-form__shipping-information-container-column">
              <input
                type="text"
                placeholder="City"
                name="city"
                value={city}
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                placeholder="Zip Code"
                name="zipcode"
                value={zipcode}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>

        <button onClick={this.handleSubmit}>Place Order</button>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps)(withRouter(ShippingForm));
