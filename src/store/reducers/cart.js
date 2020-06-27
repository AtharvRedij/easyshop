import { ADD_ITEM_TO_CART } from "../actions/cart";

const cart = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        [action.payload.productId]: {
          quantity: state[action.payload.productId]
            ? state[action.payload.productId].quantity + 1
            : 1,
        },
      };

    default:
      return state;
  }
};

export default cart;
