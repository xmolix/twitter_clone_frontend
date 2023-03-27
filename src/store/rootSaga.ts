import {all} from "redux-saga/effects";
import {watchTweetsSaga} from "./ducks/tweets/saga";
import {watchTopicsSaga} from "./ducks/topics/saga";
import {watchTweetSaga} from "./ducks/tweet/saga";
import {watchUserSaga} from "./ducks/user/saga";
import {whomReadSaga} from "./ducks/whomRead/saga";

export default function* rootSaga() {
    yield all([
        watchTweetsSaga(),
        watchTweetSaga(),
        watchTopicsSaga(),
        watchUserSaga(),
        whomReadSaga(),
    ])
}