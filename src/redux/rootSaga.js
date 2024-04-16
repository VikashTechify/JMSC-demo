// src/rootSaga.js

import { all, fork } from "redux-saga/effects";
import { watchFetchFiscalData } from "./fiscaldata/fiscaldataSaga";

export default function* rootSaga() {
  yield all([fork(watchFetchFiscalData)]);
}
