import React, { Component } from "react";
import { connect } from "react-redux";
import Homepage from "./pages/Homepage";
import { handleReceiveProducts } from "./store/actions/products";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(handleReceiveProducts());
  }

  render() {
    return <Homepage />;
  }
}

export default connect()(App);
