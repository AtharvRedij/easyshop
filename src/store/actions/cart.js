import {
  addItemToCartInDB,
  decreaseItemFromCartInDB,
  placeOrder,
} from "./../../utils/API";

export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const POPULATE_CART = "POPULATE_CART";

const addItemToCart = (productId) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: {
      productId,
    },
  };
};

const removeItemFromCart = (productId) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: {
      productId,
    },
  };
};

const decreaseItemQuantity = (productId, quantity) => {
  if (quantity === 1) {
    return removeItemFromCart(productId);
  } else {
    return {
      type: DECREASE_ITEM_QUANTITY,
      payload: {
        productId,
      },
    };
  }
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const populateCart = (cart) => {
  return {
    type: POPULATE_CART,
    payload: {
      cart,
    },
  };
};

// these function calls API with optimistic updates pattern
export const handleAddItemToCart = (productId, uid, quantity) => {
  return (dispatch) => {
    dispatch(addItemToCart(productId));
    return addItemToCartInDB(productId, uid, 1).catch((error) => {
      dispatch(decreaseItemQuantity(productId, quantity));
      console.log(error);
    });
  };
};

export const handleDecreaseItemQuantity = (productId, uid, quantity) => {
  return (dispatch) => {
    dispatch(decreaseItemQuantity(productId, quantity));
    return decreaseItemFromCartInDB(productId, uid, quantity).catch((error) => {
      dispatch(addItemToCart(productId));
      console.log(error);
    });
  };
};

export const handlePlaceOrder = (shippingInfo, cart, uid) => {
  return (dispatch) => {
    dispatch(clearCart());
    return placeOrder(shippingInfo, cart, uid).catch((error) => {
      dispatch(populateCart(cart));
      console.log(error);
    });
  };
};
