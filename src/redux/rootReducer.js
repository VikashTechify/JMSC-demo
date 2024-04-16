// src/rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";
import fiscalDataReducer from "./fiscaldata/fiscaldataSlice";

const rootReducer = combineReducers({
  fiscalData: fiscalDataReducer,
});

export default rootReducer;
