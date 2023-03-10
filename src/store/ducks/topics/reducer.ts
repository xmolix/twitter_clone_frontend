import produce, {Draft} from "immer";
import {LoadingStateEnum} from "../../storeTypes";
import {TopicsState} from "./contracts/state";
import {TopicsActionEnum, TopicsActionTypes} from "./actionCreators";

const initialTopicsState: TopicsState = {
    items: [],
    loadingState: LoadingStateEnum.NEVER,
}

export const topicsReducer = produce(
    (draft: Draft<TopicsState>, action: TopicsActionTypes) => {
    switch (action.type) {
        case TopicsActionEnum.SET_TOPICS: {
            draft.items = action.payload
            draft.loadingState = LoadingStateEnum.LOADED
            break
        }
        case TopicsActionEnum.FETCH_TOPICS: {
            draft.items = []
            draft.loadingState = LoadingStateEnum.LOADING
            break
        }
        case TopicsActionEnum.SET_LOADING_STATE: {
            draft.loadingState = action.payload
            break
        }
        default: {
            break
        }
    }
}, initialTopicsState)