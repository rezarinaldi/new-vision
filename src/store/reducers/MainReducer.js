import { combineReducers } from "redux";

import PostReducer from "./PostReducer";
import CarouselReducer from "./CarouselReducer";

const MainReducer = combineReducers({
  posts: PostReducer,
  carousels: CarouselReducer,
});

export default MainReducer;
