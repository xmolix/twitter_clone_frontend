import {InferActionTypes} from "../../store";
import {Action} from "redux";
import {WhomReadType} from "./contacts/state";

export enum WhomReadEnum {
    SET_ITEMS = "whomRead/SET_ITEMS",
    FETCH_ITEMS = "whomRead/FETCH_ITEMS",
}

export const actionWhomRead = {
    setItems: (payload: WhomReadType["items"]): ReturnActionType<SetItemsActionType> => ({
        type: WhomReadEnum.SET_ITEMS, payload
    } as const),
    fetchItems: (): ReturnActionType<FetchItemsActionType> => ({
        type: WhomReadEnum.FETCH_ITEMS
    } as const),
}

type SetItemsActionType = {
    type: WhomReadEnum.SET_ITEMS,
    payload: WhomReadType["items"]
}

type FetchItemsActionType = {
    type: WhomReadEnum.FETCH_ITEMS,
}

type ReturnActionType<T> = T & Action<WhomReadEnum>
export type WhomReadActionTypes = InferActionTypes<typeof actionWhomRead>