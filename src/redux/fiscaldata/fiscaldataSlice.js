// src/features/postSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fiscaldata: { data: [], meta: {} },
  status: "idle",
  error: null,
};

const fiscalDataSlice = createSlice({
  name: "fiscalData",
  initialState,
  reducers: {
    fiscalDataLoading(state) {
      state.status = "loading";
    },
    fiscalDataReceived(state, action) {
      state.status = "succeeded";
      state.fiscaldata = action.payload;
    },
    fiscalDataError(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fiscalDataLoading, fiscalDataReceived, fiscalDataError } =
  fiscalDataSlice.actions;

export default fiscalDataSlice.reducer;
