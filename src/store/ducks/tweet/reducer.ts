import {TweetStateType} from "./contracts/state";
import produce, {Draft} from "immer";
import {TweetActionEnum, TweetActionTypes} from "./actionCreators";
import {LoadingStateEnum} from "../../storeTypes";

const initialTweetState: TweetStateType = {
    data: undefined,
    loadingState: LoadingStateEnum.NEVER,
}

export const tweetReducer = produce(
    (draft: Draft<TweetStateType>, action: TweetActionTypes) => {
    switch (action.type) {
        case TweetActionEnum.SET_TWEET_DATA: {
            draft.data = action.payload
            draft.loadingState = LoadingStateEnum.LOADED
            break
        }
        case TweetActionEnum.FETCH_TWEET_DATA: {
            draft.data = undefined
            draft.loadingState = LoadingStateEnum.LOADING
            break
        }
        case TweetActionEnum.SET_LOADING_STATE: {
            draft.loadingState = action.payload
            break
        }
        default: {
            break
        }
    }
}, initialTweetState)