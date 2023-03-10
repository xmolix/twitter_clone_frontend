import {actionTweets, FetchAddTweetActionType, TweetsActionEnum} from "./actionCreators";
import {call, put, takeLatest} from "redux-saga/effects"
import {TweetsAPI} from "../../../services/api/tweetsAPI";
import {TweetsStateType} from "./contracts/state";
import {LoadingStateEnum, TweetType} from "../../storeTypes";

function* fetchTweetsRequest(): Generator {
    try {
        // @ts-ignore
        const items: TweetsStateType["items"] = yield call(TweetsAPI.fetchTweets)
        yield put(actionTweets.setTweets(items))
    } catch (error) {
        yield put(actionTweets.setTweetsLoadingState(LoadingStateEnum.ERROR))
    }
}

function* fetchAddTweetRequest({ payload }: FetchAddTweetActionType): Generator {
    try {
        const data: TweetType = {
            _id: Math.random().toString(32).substr(2),
            text: payload,
            user: {
                fullName: "Jura Burbecky",
                userName: "ccxlain",
                time: "1",
                avatar: "https://64.media.tumblr.com/21ca7812a6979674881adea2c87aba6b/49653c1a364b4717-28/s250x400/18d7e359505c7b5e347d201a6729395b0ebe4246.png"
            },
        }
        // @ts-ignore
        const item: TweetType = yield call(TweetsAPI.fetchAddTweet, data)
        yield put(actionTweets.addTweet(item))
    } catch (error) {
        yield put(actionTweets.setTweetsLoadingState(LoadingStateEnum.ERROR))
    }
}

export function* watchTweetsSaga() {
    yield takeLatest(TweetsActionEnum.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionEnum.FETCH_ADD_TWEET, fetchAddTweetRequest)
}
