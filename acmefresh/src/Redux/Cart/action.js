import { actionType } from "./actionType";
import axios from "axios";

export const addToCart = (product) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: product,
  };
};
export const clearCart = () => {
  return {
    type: actionType.CLEAR_CART,
  };
};
export const getCartItems = (product) => {
  return {
    type: actionType.GET_CART_ITEMS,
    payload: product,
  };
};

export const getCart = () => {
  return (dispatch) => {
    axios
      .get("https://caliapiassignments.herokuapp.com/api/cart")
      .then((response) => {
        console.log(response.data);
        dispatch(getCartItems(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addItemToCart = (product) => {
  return (dispatch) => {
    axios.post("https://caliapiassignments.herokuapp.com/api/cart", product).then((res) => {
      dispatch(addToCart(res.data));
    });
  };
};

export const removeItemFromCart = (product) => {
  return (dispatch) => {
    axios
      .delete(`https://caliapiassignments.herokuapp.com/api/cart/${product.id}`)
      .then(() => {
        dispatch(removeFromCart(product));
      });
  };
};


