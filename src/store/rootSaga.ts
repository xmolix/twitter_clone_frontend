import {all} from "redux-saga/effects";
import {watchTweetsSaga} from "./ducks/tweets/saga";
import {watchTopicsSaga} from "./ducks/topics/saga";
import {watchTweetSaga} from "./ducks/tweet/saga";

export default function* rootSaga() {
    yield all([
        watchTweetsSaga(),
        watchTweetSaga(),
        watchTopicsSaga(),
    ])
}