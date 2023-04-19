import {Action} from "redux";
import {InferActionTypes} from "../../store";
import {LoadingStatusEnum, TweetType} from "../../storeTypes";
import {AddTweetEnum, TweetsStateType} from "./contracts/state";

export enum TweetsActionEnum {
    SET_TWEETS = "tweets/SET_TWEETS",
    FETCH_TWEETS = "tweets/FETCH_TWEETS",
    SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
    FETCH_ADD_TWEET = "tweets/FETCH_ADD_TWEET",
    ADD_TWEET = "tweets/ADD_TWEET",
    REMOVE_TWEET = "tweets/REMOVE_TWEET",
    SET_ADD_TWEET_STATE = "tweets/SET_ADD_TWEET_STATE",
}

export const actionTweets = {
    setTweets: (payload: TweetsStateType["items"]): ReturnActionsTypes<SetTweetsActionType> => (
        {type: TweetsActionEnum.SET_TWEETS, payload} as const
    ),
    fetchTweets: (): ReturnActionsTypes<FetchTweetsActionType> => (
        {type: TweetsActionEnum.FETCH_TWEETS} as const
    ),
    setTweetsLoadingState: (payload: LoadingStatusEnum): ReturnActionsTypes<SetTweetsLoadingStateActionType> => (
        {type: TweetsActionEnum.SET_LOADING_STATE, payload} as const
    ),
    fetchAddTweet: (payload: { text: string, images: string[] | undefined }): ReturnActionsTypes<FetchAddTweetActionType> => ({
        type: TweetsActionEnum.FETCH_ADD_TWEET, payload
    } as const),
    addTweet: (payload: TweetType): ReturnActionsTypes<AddTweetActionType> => ({
        type: TweetsActionEnum.ADD_TWEET, payload
    } as const),
    removeTweet: (payload: string): ReturnActionsTypes<RemoveTweetActionType> => ({
        type: TweetsActionEnum.REMOVE_TWEET, payload
    } as const),
    setAddTweetState: (payload: AddTweetEnum): ReturnActionsTypes<SetAddTweetStateActionType> => ({
        type: TweetsActionEnum.SET_ADD_TWEET_STATE, payload
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
    payload: LoadingStatusEnum
}

export type FetchAddTweetActionType = {
    type: TweetsActionEnum.FETCH_ADD_TWEET,
    payload: {
        text: string,
        images: string[] | undefined,
    }
}

export type AddTweetActionType = {
    type: TweetsActionEnum.ADD_TWEET,
    payload: TweetType
}

export type RemoveTweetActionType = {
    type: TweetsActionEnum.REMOVE_TWEET,
    payload: string,
}

type SetAddTweetStateActionType = {
    type: TweetsActionEnum.SET_ADD_TWEET_STATE,
    payload: AddTweetEnum
}

type ReturnActionsTypes<T> = T & Action<TweetsActionEnum>
export type TweetsActionTypes = InferActionTypes<typeof actionTweets>