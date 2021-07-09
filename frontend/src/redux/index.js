import { compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { projectSlice } from "./projects";
import { configureStore } from "@reduxjs/toolkit";

let projectReducer = projectSlice.reducer;
const rootReducer = combineReducers({
  projectStore: projectReducer,
});
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});
