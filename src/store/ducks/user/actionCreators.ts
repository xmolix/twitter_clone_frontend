import {UserStateType} from "./contacts/state";
import {LoadingStatusEnum} from "../../storeTypes";
import {Action} from "redux";
import {InferActionTypes} from "../../store";
import {LoginFormPropsType} from "../../../pages/SingIn/components/LoginModal";

export enum UserActionEnum {
    SET_DATA = "user/SET_DATA",
    SET_LOADING_STATE = "user/SET_LOADING_STATE",
    FETCH_DATA = "user/FETCH_DATA"
}

export const actionUser = {
    setUserData: (payload: UserStateType["data"]): ReturnActionTypes<SetUserDataActionType> => ({
        type: UserActionEnum.SET_DATA, payload
    } as const),
    setLoadingState: (payload: LoadingStatusEnum): ReturnActionTypes<SetLoadingActionType> => ({
        type: UserActionEnum.SET_LOADING_STATE, payload
    } as const),
    fetchUserData: (payload: LoginFormPropsType): ReturnActionTypes<FetchUserDataActionType> => ({
        type: UserActionEnum.FETCH_DATA, payload
    } as const),
}

type SetUserDataActionType = {
    type: UserActionEnum.SET_DATA,
    payload: UserStateType["data"],
}

type SetLoadingActionType = {
    type: UserActionEnum.SET_LOADING_STATE,
    payload: LoadingStatusEnum
}

export type FetchUserDataActionType = {
    type: UserActionEnum.FETCH_DATA,
    payload: LoginFormPropsType
}

type ReturnActionTypes<T> = T & Action<UserActionEnum>
export type UserActionTypes = InferActionTypes<typeof actionUser>