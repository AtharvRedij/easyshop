import React, { Component } from "react";
import Product from "./Product";
import "./ProductsList.css";
import DATA from "../DATA";

class ProductsList extends Component {
  state = {};
  render() {
    const products = Object.values(DATA);

    return (
      <div className="products-list__container">
        {products.map((product) => (
          <Product key={product.productId} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductsList;
