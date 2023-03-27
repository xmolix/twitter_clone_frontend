import {UserStateType} from "../../user/contacts/state";
import {LoadingStatusEnum} from "../../../storeTypes";

export type WhomReadType = {
    items: UserStateType["data"][],
    loadingStatus: LoadingStatusEnum,
}