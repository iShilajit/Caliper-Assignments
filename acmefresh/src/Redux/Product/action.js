import { actionType } from "./actionType";

const fetchsuccess = (ProductData) => {
  // set data to ProductsData
  return {
    type: actionType.FETCH_PRODUCT_DATA_SUCCESS,
    payload: ProductData, // data from the server
  };
};

const fetchfail = (error) => {
  // set error to true
  return {
    type: actionType.FETCH_PRODUCT_DATA_FAILURE,
    payload: error,
  };
};

const isLoading = () => {
  // set loading to true
  return {
    type: actionType.FETCH_PRODUCT_DATA_LOADING,
  };
};

const fetchProducts = () => async (dispatch) => {
  dispatch(isLoading()); // set loading to true

  try {
    const res = await fetch("https://caliapiassignments.herokuapp.com/api/products"); // fetching data from the server
    const data = await res.json();
    if (data.message) {
      dispatch(fetchfail(data.message));
    } else {
      dispatch(fetchsuccess(data));
    }
  } catch (error) {
    dispatch(fetchfail(error)); // set error to true
  }
};

export {
  fetchsuccess,
  fetchfail,
  isLoading,
  fetchProducts,
};
