import { RECEIVE_PRODUCTS } from "./../actions/products";

const products = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.payload.products,
      };

    default:
      return state;
  }
};

export default products;
