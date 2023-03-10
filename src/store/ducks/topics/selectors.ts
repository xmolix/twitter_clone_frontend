import {AppStateType} from "../../store";
import {TopicsState} from "./contracts/state";
import {createSelector} from "reselect";
import {LoadingStateEnum} from "../../storeTypes";

const topicsSelectors = (state: AppStateType): TopicsState => state.topics

export const selectTopics = createSelector(topicsSelectors, (topics) => topics.items)

export const selectTopicsLoadingState = (state: AppStateType): LoadingStateEnum =>
    topicsSelectors(state).loadingState

export const selectIsTopicsLoading = (state: AppStateType): boolean =>
    topicsSelectors(state).loadingState === LoadingStateEnum.LOADING

export const selectTopicsLoaded = (state: AppStateType): boolean =>
    topicsSelectors(state).loadingState === LoadingStateEnum.LOADED