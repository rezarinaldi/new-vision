import axios from "axios";
import {
  FETCH_CAROUSELS_REQUEST,
  FETCH_CAROUSELS_SUCCESS,
  FETCH_CAROUSELS_FAILURE,
} from "../store/actions/actionsTypes";

export const fetchCarousels = () => {
  return (dispatch) => {
    dispatch(fetchCarouselsRequest());
    axios
      .get("http://localhost:3001/carousels")
      .then((response) => {
        const carousels = response.data;
        dispatch(fetchCarouselsSuccess(carousels));
      })
      .catch((error) => {
        dispatch(fetchCarouselsFailure(error.message));
      });
  };
};
export const fetchCarouselsRequest = () => {
  return {
    type: FETCH_CAROUSELS_REQUEST,
  };
};

export const fetchCarouselsSuccess = (carousels) => {
  return {
    type: FETCH_CAROUSELS_SUCCESS,
    payload: carousels,
  };
};

export const fetchCarouselsFailure = (error) => {
  return {
    type: FETCH_CAROUSELS_FAILURE,
    payload: error,
  };
};
