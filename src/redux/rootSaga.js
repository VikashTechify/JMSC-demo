// src/rootSaga.js

import { all } from "redux-saga/effects";
import { watchFetchPosts } from "./post/postSaga";

export default function* rootSaga() {
  yield all([watchFetchPosts()]);
}
