import {Action} from "redux";
import {InferActionTypes} from "../../store";
import {LoadingStateEnum, TweetType} from "../../storeTypes";
import {TweetsStateType} from "./contracts/state";

export enum TweetsActionEnum {
    SET_TWEETS = "tweets/SET_TWEETS",
    FETCH_TWEETS = "tweets/FETCH_TWEETS",
    SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
    FETCH_ADD_TWEET = "tweets/FETCH_ADD_TWEET",
    ADD_TWEET = "tweets/ADD_TWEET",
}

export const actionTweets = {
    setTweets: (payload: TweetsStateType["items"]): ReturnActionsTypes<SetTweetsActionType> => (
        {type: TweetsActionEnum.SET_TWEETS, payload} as const
    ),
    fetchTweets: (): ReturnActionsTypes<FetchTweetsActionType> => (
        {type: TweetsActionEnum.FETCH_TWEETS} as const
    ),
    setTweetsLoadingState: (payload: LoadingStateEnum): ReturnActionsTypes<SetTweetsLoadingStateActionType> => (
        {type: TweetsActionEnum.SET_LOADING_STATE, payload} as const
    ),
    fetchAddTweet: (payload: string): ReturnActionsTypes<FetchAddTweetActionType> => ({
        type: TweetsActionEnum.FETCH_ADD_TWEET, payload
    } as const),
    addTweet: (payload: TweetType): ReturnActionsTypes<AddTweetActionType> => ({
        type: TweetsActionEnum.ADD_TWEET, payload
    } as const),
}

type SetTweetsActionType = {
    type: TweetsActionEnum.SET_TWEETS,
    payload: TweetsStateType["items"],
}

type FetchTweetsActionType = {
    type: TweetsActionEnum.FETCH_TWEETS
}

type SetTweetsLoadingStateActionType = {
    type: TweetsActionEnum.SET_LOADING_STATE,
    payload: TweetsStateType["loadingState"]
}

export type FetchAddTweetActionType = {
    type: TweetsActionEnum.FETCH_ADD_TWEET,
    payload: string
}

export type AddTweetActionType = {
    type: TweetsActionEnum.ADD_TWEET,
    payload: TweetType
}

type ReturnActionsTypes<T> = T & Action<TweetsActionEnum>
export type TweetsActionTypes = InferActionTypes<typeof actionTweets>