import {LoadingStatusEnum, TweetType} from "../../../storeTypes";

export type TweetStateType = {
    data?: TweetType,
    loadingState: LoadingStatusEnum
}