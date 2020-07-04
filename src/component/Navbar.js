import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { signOut, signInWithGoogle } from "./../utils/API";
import "./Navbar.css";

const Navbar = (props) => {
  const { itemCount, user } = props;

  return (
    <div className="navbar">
      <Link to="/">
        <h3>Easyshop</h3>
      </Link>

      {Object.keys(user).length !== 0 ? (
        <div className="navbar__content">
          <NavLink to="/checkout">
            <div className="navbar__cart-icon">
              <ShoppingIcon className="navbar__shopping-icon" />
              <span className="navbar__item-count">{itemCount}</span>
            </div>
          </NavLink>

          <div
            style={{
              cursor: "pointer",
            }}
            onClick={signOut}
          >
            Sign Out
          </div>
        </div>
      ) : (
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={signInWithGoogle}
        >
          Sign In
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ cart, user }) => {
  let itemCount = 0;
  const items = Object.values(cart);
  for (let i = 0; i < items.length; i++) {
    itemCount += items[i].quantity;
  }

  return {
    itemCount,
    user,
  };
};

export default connect(mapStateToProps)(Navbar);
