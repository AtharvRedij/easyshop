import React, { Component } from "react";
import Navbar from "../component/Navbar";
import ProductsList from "../component/ProductsList";
import "./Homepage.css";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="homepage__container">
        <Navbar />
        <ProductsList />
      </div>
    );
  }
}

export default Homepage;
