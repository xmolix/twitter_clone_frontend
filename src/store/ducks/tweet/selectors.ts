import {AppStateType} from "../../store";
import {LoadingStateEnum} from "../../storeTypes";
import {TweetStateType} from "./contracts/state";

const tweetSelectors = (state: AppStateType): TweetStateType => state.tweet

export const selectTweetData = (state: AppStateType): TweetStateType["data"] => tweetSelectors(state).data

export const selectTweetLoadingState = (state: AppStateType): LoadingStateEnum =>
    tweetSelectors(state).loadingState

export const selectIsTweetLoading = (state: AppStateType): boolean =>
    tweetSelectors(state).loadingState === LoadingStateEnum.LOADING
export const selectIsTweetLoaded = (state: AppStateType): boolean =>
    tweetSelectors(state).loadingState === LoadingStateEnum.LOADED