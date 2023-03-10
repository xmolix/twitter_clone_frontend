import {Action} from "redux";
import {InferActionTypes} from "../../store";
import {TopicsState} from "./contracts/state";
import {LoadingStateEnum} from "../../storeTypes";

export enum TopicsActionEnum {
    SET_TOPICS = "topics/SET_TOPICS",
    FETCH_TOPICS = "topics/FETCH_TOPICS",
    SET_LOADING_STATE = "topics/SET_LOADING_STATE",
}

export const actionTopics = {
    setTopics: (payload: TopicsState["items"]): ReturnActionsTypes<SetTopicsActionType> => ({
        type: TopicsActionEnum.SET_TOPICS, payload
    } as const),
    fetchTopics: (): ReturnActionsTypes<FetchTopicsActionType> => ({
            type: TopicsActionEnum.FETCH_TOPICS
    } as const),
    setTopicsLoadingState: (payload: LoadingStateEnum): ReturnActionsTypes<SetTopicsLoadingStateActionType> => ({
            type: TopicsActionEnum.SET_LOADING_STATE, payload
    } as const),
}

type SetTopicsActionType = {
    type: TopicsActionEnum.SET_TOPICS,
    payload: TopicsState["items"],
}

type FetchTopicsActionType = {
    type: TopicsActionEnum.FETCH_TOPICS
}

type SetTopicsLoadingStateActionType = {
    type: TopicsActionEnum.SET_LOADING_STATE
    payload: TopicsState["loadingState"]
}

type ReturnActionsTypes<T> = T & Action<TopicsActionEnum>
export type TopicsActionTypes = InferActionTypes<typeof actionTopics>