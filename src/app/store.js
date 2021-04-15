import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import MainReducer from "../store/reducers/MainReducer";

const store = createStore(
  MainReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
