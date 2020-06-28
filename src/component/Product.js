import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addItemToCart } from "../store/actions/cart";
import "./Product.css";

const Product = (props) => {
  const { productId, name, price, imageUrl, itemsInStock } = props.product;
  const { quantity } = props;

  return (
    <div className="product__container">
      <div className="product__image-container">
        <img src={imageUrl} alt={name} className="product__product-image" />
        <div
          className="product__add-to-cart"
          onClick={() => {
            if (quantity < itemsInStock) {
              props.dispatch(addItemToCart(productId));
            } else {
              toast.info(`Only ${itemsInStock} items in stock`);
            }
          }}
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

const mapStateToProps = ({ cart }, { product }) => {
  return {
    quantity: cart[product.productId] ? cart[product.productId].quantity : 0,
  };
};

export default connect(mapStateToProps)(Product);
