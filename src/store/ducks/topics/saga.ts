import {call, put, takeLatest} from "redux-saga/effects";
import {TopicsAPI} from "../../../services/api/topicsAPI";
import {actionTopics, TopicsActionEnum} from "./actionCreators";
import {LoadingStateEnum} from "../../storeTypes";
import {TopicsState} from "./contracts/state";

export function* fetchTopicsRequest(): Generator {
    try {
        // @ts-ignore
        const items: TopicsState["items"] = yield call(TopicsAPI.fetchTopics)
        yield put(actionTopics.setTopics(items))
    } catch (error) {
        yield put(actionTopics.setTopicsLoadingState(LoadingStateEnum.ERROR))
    }
}

export function* watchTopicsSaga() {
    yield takeLatest(TopicsActionEnum.FETCH_TOPICS, fetchTopicsRequest)
}