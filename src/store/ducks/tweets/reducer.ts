import {AddTweetEnum, TweetsStateType} from "./contracts/state";
import produce, {Draft} from "immer";
import {TweetsActionEnum, TweetsActionTypes} from "./actionCreators";
import {LoadingStatusEnum} from "../../storeTypes";

const initialTweetsState: TweetsStateType = {
    items: [],
    loadingState: LoadingStatusEnum.NEVER,
    addTweetState: AddTweetEnum.NEVER,
}

export const tweetsReducer = produce(
    (draft: Draft<TweetsStateType>, action: TweetsActionTypes) => {
    switch (action.type) {
        case TweetsActionEnum.SET_TWEETS: {
            draft.items = action.payload
            draft.loadingState = LoadingStatusEnum.LOADED
            break
        }
        case TweetsActionEnum.FETCH_TWEETS: {
            draft.items = []
            draft.loadingState = LoadingStatusEnum.LOADING
            break
        }
        case TweetsActionEnum.SET_LOADING_STATE: {
            draft.loadingState = action.payload
            break
        }
        case TweetsActionEnum.SET_ADD_TWEET_STATE: {
            draft.addTweetState = action.payload
            break
        }
        case TweetsActionEnum.FETCH_ADD_TWEET: {
            draft.addTweetState = AddTweetEnum.LOADING
            break
        }
        case TweetsActionEnum.ADD_TWEET: {
            draft.items.unshift(action.payload)
            draft.addTweetState = AddTweetEnum.NEVER
            break
        }
        case TweetsActionEnum.REMOVE_TWEET: {
            draft.items = draft.items.filter(obj => obj._id !== action.payload)
            break
        }
        default: {
            break
        }
    }
}, initialTweetsState)