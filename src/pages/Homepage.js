import React, { Component } from "react";
import Navbar from "../component/Navbar";
import ProductsList from "../component/ProductsList";
import "./Homepage.css";
import Checkout from "./Checkout";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="homepage__container">
        {/* <Navbar />
        <ProductsList /> */}
        <Checkout />
      </div>
    );
  }
}

export default Homepage;
