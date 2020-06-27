import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../store/actions/cart";
import "./Product.css";

const Product = (props) => {
  const { productId, name, price, imageUrl } = props.product;

  return (
    <div className="product__container">
      <div className="product__image-container">
        <img src={imageUrl} alt={name} className="product__product-image" />
        <div
          className="product__add-to-cart"
          onClick={() => props.dispatch(addItemToCart(productId))}
        >
          ADD TO CART
        </div>
      </div>
      <div className="product__product-footer">
        <span className="name">{name}</span>
        <span className="price">Rs.{price}</span>
      </div>
    </div>
  );
};

export default connect()(Product);
