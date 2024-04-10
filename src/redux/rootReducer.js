// src/rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
