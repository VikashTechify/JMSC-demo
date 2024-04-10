// src/features/postSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};


const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsLoading(state) {
      state.status = "loading";
    },
    postsReceived(state, action) {
      state.status = "succeeded";
      state.posts = action.payload;
    },
    postsError(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { postsLoading, postsReceived, postsError } = postSlice.actions;

export default postSlice.reducer;
