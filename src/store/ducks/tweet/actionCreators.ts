import {Action} from "redux";
import {InferActionTypes} from "../../store";
import {LoadingStatusEnum} from "../../storeTypes";
import {TweetStateType} from "./contracts/state";

export enum TweetActionEnum {
    SET_TWEET_DATA = "tweet/SET_TWEET_DATA",
    FETCH_TWEET_DATA = "tweet/FETCH_TWEET_DATA",
    SET_LOADING_STATE = "tweet/SET_LOADING_STATE",
}

export const actionTweet = {
    setTweetData: (payload: TweetStateType["data"]): ReturnActionsTypes<SetTweetDataActionType> => ({
        type: TweetActionEnum.SET_TWEET_DATA, payload
    } as const),
    fetchTweetDataActionType: (payload: string): ReturnActionsTypes<FetchTweetDataActionType> => ({
        type: TweetActionEnum.FETCH_TWEET_DATA, payload
    } as const),
    setTweetLoadingState: (payload: LoadingStatusEnum): ReturnActionsTypes<SetTweetDataLoadingStateActionType> => ({
        type: TweetActionEnum.SET_LOADING_STATE, payload
    } as const),
}

type SetTweetDataActionType = {
    type: TweetActionEnum.SET_TWEET_DATA,
    payload: TweetStateType["data"],
}

export type FetchTweetDataActionType = {
    type: TweetActionEnum.FETCH_TWEET_DATA,
    payload: string,
}

type SetTweetDataLoadingStateActionType = {
    type: TweetActionEnum.SET_LOADING_STATE,
    payload: LoadingStatusEnum
}

type ReturnActionsTypes<T> = T & Action<TweetActionEnum>
export type TweetActionTypes = InferActionTypes<typeof actionTweet>