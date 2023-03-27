import {AppStateType} from "../../store";
import {TopicsState} from "./contracts/state";
import {createSelector} from "reselect";
import {LoadingStatusEnum} from "../../storeTypes";

const topicsSelectors = (state: AppStateType): TopicsState => state.topics

export const selectTopics = createSelector(topicsSelectors, (topics) => topics.items)

export const selectTopicsLoadingState = (state: AppStateType): LoadingStatusEnum =>
    topicsSelectors(state).loadingState

export const selectIsTopicsLoading = (state: AppStateType): boolean =>
    topicsSelectors(state).loadingState === LoadingStatusEnum.LOADING

export const selectTopicsLoaded = (state: AppStateType): boolean =>
    topicsSelectors(state).loadingState === LoadingStatusEnum.LOADED