import {UserStateType} from "./contacts/state";
import {LoadingStatusEnum} from "../../storeTypes";
import produce, {Draft} from "immer";
import {UserActionEnum, UserActionTypes} from "./actionCreators";

const initialState: UserStateType = {
    data: undefined,
    status: LoadingStatusEnum.NEVER
}

export const userReducer = produce(
    (draft: Draft<UserStateType>, action: UserActionTypes) => {
    switch (action.type) {
        case UserActionEnum.SET_DATA: {
            draft.data = action.payload
            draft.status = LoadingStatusEnum.SUCCESS
            break
        }
        case UserActionEnum.SET_LOADING_STATE: {
            draft.status = action.payload
            break
        }
        case UserActionEnum.FETCH_SIGN_OUT: {
            draft.data = undefined
            draft.status = LoadingStatusEnum.NEVER

            window.localStorage.setItem("token", "")
            break
        }
        default: {
            break
        }
    }
}, initialState)