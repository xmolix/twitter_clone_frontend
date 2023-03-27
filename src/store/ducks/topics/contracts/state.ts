import {LoadingStatusEnum} from "../../../storeTypes";

type Topics = {
    _id: string,
    name: string,
    count: number,
}

export type TopicsState = {
    items: Topics[],
    loadingState: LoadingStatusEnum,
}