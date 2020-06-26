import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import "./ProductsList.css";

const ProductsList = (props) => {
  const products = Object.values(props.products);

  return (
    <div className="products-list__container">
      {products.map((product) => (
        <Product key={product.productId} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapStateToProps)(ProductsList);
