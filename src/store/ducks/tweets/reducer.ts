import {TweetsStateType} from "./contracts/state";
import produce, {Draft} from "immer";
import {TweetsActionEnum, TweetsActionTypes} from "./actionCreators";
import {LoadingStateEnum} from "../../storeTypes";

const initialTweetsState: TweetsStateType = {
    items: [],
    loadingState: LoadingStateEnum.NEVER,
}

export const tweetsReducer = produce(
    (draft: Draft<TweetsStateType>, action: TweetsActionTypes) => {
    switch (action.type) {
        case TweetsActionEnum.SET_TWEETS: {
            draft.items = action.payload
            draft.loadingState = LoadingStateEnum.LOADED
            break
        }
        case TweetsActionEnum.FETCH_TWEETS: {
            draft.items = []
            draft.loadingState = LoadingStateEnum.LOADING
            break
        }
        case TweetsActionEnum.SET_LOADING_STATE: {
            draft.loadingState = action.payload
            break
        }
        case TweetsActionEnum.ADD_TWEET: {
            draft.items.push(action.payload)
            break
        }
        default: {
            break
        }
    }
}, initialTweetsState)