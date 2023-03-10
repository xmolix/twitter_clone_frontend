import {LoadingStateEnum, TweetType} from "../../../storeTypes";

export type TweetsStateType = {
    items: TweetType[],
    loadingState: LoadingStateEnum
}