// src/sagas/postSaga.js

import { put, takeLatest } from "redux-saga/effects";
import { postsLoading, postsReceived, postsError } from "./postSlice";
import { FETCH_POST } from "./postAction";
import { fetchPost } from "../../services/post.service";

function* fetchPostsAsync() {
  try {
    yield put(postsLoading());
    const response = yield fetchPost();
    yield put(postsReceived(response.data));
  } catch (error) {
    yield put(postsError(error.message));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POST, fetchPostsAsync);
}
