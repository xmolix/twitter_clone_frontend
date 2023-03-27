import {LoadingStatusEnum, TweetType} from "../../../storeTypes";

export enum AddTweetEnum {
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

export type TweetsStateType = {
    items: TweetType[],
    loadingState: LoadingStatusEnum,
    addTweetState: AddTweetEnum,
}