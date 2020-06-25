import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product__container">
      <div className="product__image-container">
        <img src={imageUrl} alt={name} className="product__product-image" />
        <div className="product__add-to-cart">ADD TO CART</div>
      </div>
      <div className="product__product-footer">
        <span className="name">{name}</span>
        <span className="price">Rs.{price}</span>
      </div>
    </div>
  );
};

export default Product;
