// src/sagas/postSaga.js

import { put, takeLatest } from "redux-saga/effects";
import {
  fiscalDataError,
  fiscalDataLoading,
  fiscalDataReceived,
} from "./fiscaldataSlice";
import { FETCH_FISCAL_DATA } from "./fiscaldataAction";
import { fetchFiscalDataAsync } from "../../services/fiscalData.service";

function* fetchfiscalDatasAsync(action) {
  console.log("gene", action);
  try {
    yield put(fiscalDataLoading());
    const { data } = yield fetchFiscalDataAsync(action.payload);
    yield put(
      fiscalDataReceived({
        data: data?.data,
        meta: { ...data?.meta, currentPage: action.payload["page[number]"] },
      })
    );
  } catch (error) {
    yield put(fiscalDataError(error.message));
  }
}

export function* watchFetchFiscalData() {
  yield takeLatest(FETCH_FISCAL_DATA, fetchfiscalDatasAsync);
}
