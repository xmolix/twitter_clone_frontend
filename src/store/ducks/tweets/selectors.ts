import {AppStateType} from "../../store";
import {createSelector} from "reselect";
import {AddTweetEnum, TweetsStateType} from "./contracts/state";
import {LoadingStateEnum} from "../../storeTypes";

const selectTweetsState = (state: AppStateType): TweetsStateType => state.tweets

export const selectTweets = createSelector(selectTweetsState, (tweets) => tweets.items)

export const selectTweetsLoadingState = (state: AppStateType): LoadingStateEnum =>
    selectTweetsState(state).loadingState
export const selectAddTweetState = (state: AppStateType): AddTweetEnum =>
    selectTweetsState(state).addTweetState

export const selectIsTweetsLoading = (state: AppStateType): boolean =>
    selectTweetsState(state).loadingState === LoadingStateEnum.LOADING
export const selectIsTweetsLoaded = (state: AppStateType): boolean =>
    selectTweetsState(state).loadingState === LoadingStateEnum.LOADED