import React, { Component } from "react";
import ProductsList from "../component/ProductsList";
import "./Homepage.css";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="homepage__container">
        <h1>Home</h1>
        <ProductsList />
      </div>
    );
  }
}

export default Homepage;
