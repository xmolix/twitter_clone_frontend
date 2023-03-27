import {WhomReadType} from "./contacts/state";
import {LoadingStatusEnum} from "../../storeTypes";
import produce, {Draft} from "immer";
import {WhomReadActionTypes, WhomReadEnum} from "./actionCreator";

const initialWhomReadState: WhomReadType = {
    items: [],
    loadingStatus: LoadingStatusEnum.NEVER,
}

export const whomReadReducer = produce(
    (draft: Draft<WhomReadType>, action: WhomReadActionTypes) => {
    switch (action.type) {
        case WhomReadEnum.SET_ITEMS: {
            draft.items = action.payload
            draft.loadingStatus = LoadingStatusEnum.LOADED
            break
        }
        case WhomReadEnum.FETCH_ITEMS: {
            draft.loadingStatus = LoadingStatusEnum.LOADING
            break
        }
        default: {
            break
        }
    }
}, initialWhomReadState)