import {call, put, takeEvery} from "redux-saga/effects"
import {TweetsAPI} from "../../../services/api/tweetsAPI";
import {LoadingStatusEnum, TweetType} from "../../storeTypes";
import {actionTweet, FetchTweetDataActionType, TweetActionEnum} from "./actionCreators";

function* fetchTweetDataRequest({ payload: tweetID }: FetchTweetDataActionType): Generator {
    try {
        // @ts-ignore
        const data: TweetType = yield call(TweetsAPI.fetchTweetData, tweetID)
        yield put(actionTweet.setTweetData(data))
    } catch (error) {
        yield put(actionTweet.setTweetLoadingState(LoadingStatusEnum.ERROR))
    }
}

export function* watchTweetSaga() {
    yield takeEvery(TweetActionEnum.FETCH_TWEET_DATA, fetchTweetDataRequest)
}
