export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";

export const addItemToCart = (productId) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: {
      productId,
    },
  };
};
