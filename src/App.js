import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";
import Checkout from "./pages/Checkout";
import { handleReceiveProducts } from "./store/actions/products";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(handleReceiveProducts());
  }

  render() {
    return (
      <React.Fragment>
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
