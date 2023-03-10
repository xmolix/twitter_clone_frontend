import {LoadingStateEnum, TweetType} from "../../../storeTypes";

export type TweetStateType = {
    data?: TweetType,
    loadingState: LoadingStateEnum
}