import {AppStateType} from "../../store";
import {LoadingStatusEnum} from "../../storeTypes";
import {TweetStateType} from "./contracts/state";

const tweetSelectors = (state: AppStateType): TweetStateType => state.tweet

export const selectTweetData = (state: AppStateType): TweetStateType["data"] => tweetSelectors(state).data

export const selectTweetLoadingState = (state: AppStateType): LoadingStatusEnum =>
    tweetSelectors(state).loadingState

export const selectIsTweetLoading = (state: AppStateType): boolean =>
    tweetSelectors(state).loadingState === LoadingStatusEnum.LOADING
export const selectIsTweetLoaded = (state: AppStateType): boolean =>
    tweetSelectors(state).loadingState === LoadingStatusEnum.LOADED