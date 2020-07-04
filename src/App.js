import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";
import Checkout from "./pages/Checkout";
import { handleReceiveProducts } from "./store/actions/products";
import { userSignIn, userSignOut } from "./store/actions/user";
import { populateCart } from "./store/actions/cart";
import { auth, createUserProfileDocument } from "./utils/API";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  unsubscribeFromAuth = null;

  async componentDidMount() {
    this.props.dispatch(handleReceiveProducts());

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const user = await createUserProfileDocument(userAuth);

      if (user) {
        this.props.dispatch(userSignIn(user));
        this.props.dispatch(populateCart(user.cart));
      } else {
        this.props.dispatch(userSignOut());
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar />
        {/* Route setup */}
        <Switch>
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/" exact component={Homepage} />

          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default connect()(App);
