import {actionTweets, FetchAddTweetActionType, RemoveTweetActionType, TweetsActionEnum} from "./actionCreators";
import {call, put, takeLatest} from "redux-saga/effects"
import {TweetsAPI} from "../../../services/api/tweetsAPI";
import {AddTweetEnum, TweetsStateType} from "./contracts/state";
import {LoadingStatusEnum, TweetType} from "../../storeTypes";

function* fetchTweetsRequest(): Generator {
    try {
        // @ts-ignore
        const items: TweetsStateType["items"] = yield call(TweetsAPI.fetchTweets)
        yield put(actionTweets.setTweets(items))
    } catch (error) {
        yield put(actionTweets.setTweetsLoadingState(LoadingStatusEnum.ERROR))
    }
}

function* fetchAddTweetRequest({ payload }: FetchAddTweetActionType): Generator {
    try {
        // @ts-ignore
        const item: TweetType = yield call(TweetsAPI.fetchAddTweet, payload)
        yield put(actionTweets.addTweet(item))
    } catch (error) {
        yield put(actionTweets.setAddTweetState(AddTweetEnum.ERROR))
    }
}

function* fetchRemoveTweetRequest({ payload }: RemoveTweetActionType): Generator {
    try {
        // @ts-ignore
        const item: TweetType = yield call(TweetsAPI.fetchRemoveTweet, payload)
        yield put(actionTweets.removeTweet(item._id))
    } catch {
        yield put(actionTweets.setAddTweetState(AddTweetEnum.ERROR))
    }
}

export function* watchTweetsSaga() {
    yield takeLatest(TweetsActionEnum.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionEnum.FETCH_ADD_TWEET, fetchAddTweetRequest)
    yield takeLatest(TweetsActionEnum.REMOVE_TWEET, fetchRemoveTweetRequest)
}
