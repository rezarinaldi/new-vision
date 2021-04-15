import {
  FETCH_CAROUSELS_REQUEST,
  FETCH_CAROUSELS_SUCCESS,
  FETCH_CAROUSELS_FAILURE,
} from "../actions/actionsTypes";

const initialState = {
  loading: false,
  carousels: [],
  error: "",
};

const CarouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAROUSELS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CAROUSELS_SUCCESS:
      return {
        loading: false,
        carousels: action.payload,
        error: "",
      };
    case FETCH_CAROUSELS_FAILURE:
      return {
        loading: false,
        carousels: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CarouselReducer;
