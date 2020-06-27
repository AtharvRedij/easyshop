import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
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

  validate = (userInfo, cart) => {
    // check if cart is empty
    if (Object.keys(cart).length === 0) {
      toast.error("Cart is empty");
      return false;
    }

    // check if any of the values for user info is empty
    const values = Object.values(userInfo);
    for (let i = 0; i < values.length; i++) {
      if (values[i].trim() === "") {
        toast.error("Information is incomplete");
        return false;
      }
    }

    // check if email is valid
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(userInfo.email).toLowerCase())) {
      toast.error("Invalid email");
      return false;
    }

    // check if pincode is a number
    if (isNaN(userInfo.zipcode) || userInfo.zipcode.length < 6) {
      toast.error("Invalid zipcode");
      return false;
    }

    return true;
  };

  handleSubmit = () => {
    const { cart, dispatch } = this.props;
    const userInfo = this.state.data;

    if (this.validate(userInfo, cart)) {
      dispatch(handlePlaceOrder(userInfo, cart));

      this.props.history.replace("/");
    }
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
