export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";

export const addItemToCart = (productId) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: {
      productId,
    },
  };
};

export const removeItemFromCart = (productId) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: {
      productId,
    },
  };
};

export const increaseItemQuantity = (productId) => addItemToCart(productId);

export const decreaseItemQuantity = (productId, quantity) => {
  if (quantity == 1) {
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
