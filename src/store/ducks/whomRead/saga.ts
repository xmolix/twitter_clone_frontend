import {call, takeLatest} from "redux-saga/effects";
import {WhomReadEnum} from "./actionCreator";

export function* fetchWhomReadRequest(): Generator {
    // const items = yield call()
}

export function* whomReadSaga() {
    yield takeLatest(WhomReadEnum.FETCH_ITEMS, fetchWhomReadRequest)
}