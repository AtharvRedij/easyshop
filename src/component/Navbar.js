import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import "./Navbar.css";

const Navbar = (props) => {
  const { itemCount } = props;
  return (
    <div className="navbar">
      <Link to="/">
        <h3>Easyshop</h3>
      </Link>

      <NavLink to="/checkout">
        <div className="navbar__cart-icon">
          <ShoppingIcon className="navbar__shopping-icon" />
          <span className="navbar__item-count">{itemCount}</span>
        </div>
      </NavLink>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  let itemCount = 0;
  const items = Object.values(cart);
  for (let i = 0; i < items.length; i++) {
    itemCount += items[i].quantity;
  }

  return {
    itemCount,
  };
};

export default connect(mapStateToProps)(Navbar);
