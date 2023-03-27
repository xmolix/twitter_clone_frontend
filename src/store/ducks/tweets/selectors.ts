import {AppStateType} from "../../store";
import {createSelector} from "reselect";
import {AddTweetEnum, TweetsStateType} from "./contracts/state";
import {LoadingStatusEnum} from "../../storeTypes";

const selectTweetsState = (state: AppStateType): TweetsStateType => state.tweets

export const selectTweets = createSelector(selectTweetsState, (tweets) => tweets.items)

export const selectTweetsLoadingState = (state: AppStateType): LoadingStatusEnum =>
    selectTweetsState(state).loadingState
export const selectAddTweetState = (state: AppStateType): AddTweetEnum =>
    selectTweetsState(state).addTweetState

export const selectIsTweetsLoading = (state: AppStateType): boolean =>
    selectTweetsState(state).loadingState === LoadingStatusEnum.LOADING
export const selectIsTweetsLoaded = (state: AppStateType): boolean =>
    selectTweetsState(state).loadingState === LoadingStatusEnum.LOADED