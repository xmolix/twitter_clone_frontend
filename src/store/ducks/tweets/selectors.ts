import {AppStateType} from "../../store";
import {createSelector} from "reselect";
import {TweetsStateType} from "./contracts/state";
import {LoadingStateEnum} from "../../storeTypes";

const tweetsSelectors = (state: AppStateType): TweetsStateType => state.tweets

export const selectTweets = createSelector(tweetsSelectors, (tweets) => tweets.items)

export const selectTweetsLoadingState = (state: AppStateType): LoadingStateEnum => tweetsSelectors(state).loadingState
export const selectIsTweetsLoading = (state: AppStateType): boolean =>
    tweetsSelectors(state).loadingState === LoadingStateEnum.LOADING
export const selectIsTweetsLoaded = (state: AppStateType): boolean =>
    tweetsSelectors(state).loadingState === LoadingStateEnum.LOADED