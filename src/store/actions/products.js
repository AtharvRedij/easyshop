import { getAllProducts } from "../../utils/API";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

const receiveProducts = (products) => {
  return {
    type: RECEIVE_PRODUCTS,
    payload: {
      products,
    },
  };
};

// this function calls API and then dispatches action RECEIVE_PRODUCTS
export const handleReceiveProducts = () => {
  return (dispatch) => {
    return getAllProducts().then((products) => {
      dispatch(receiveProducts(products));
    });
  };
};
