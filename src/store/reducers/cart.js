import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DECREASE_ITEM_QUANTITY,
  CLEAR_CART,
  POPULATE_CART,
} from "../actions/cart";

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

    case REMOVE_ITEM_FROM_CART:
      const {
        [action.payload.productId]: itemToRemove,
        ...updatedCart
      } = state;
      return updatedCart;

    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        [action.payload.productId]: {
          quantity: state[action.payload.productId].quantity - 1,
        },
      };

    case CLEAR_CART:
      return {};

    case POPULATE_CART:
      return action.payload.cart;

    default:
      return state;
  }
};

export default cart;
