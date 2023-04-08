import {UserStateType} from "./contacts/state";
import {LoadingStatusEnum} from "../../storeTypes";
import {Action} from "redux";
import {InferActionTypes} from "../../store";
import {LoginFormPropsType} from "../../../pages/SingIn/components/LoginModal";
import {RegisterFormPropsType} from "../../../pages/SingIn/components/RegisterModal";

export enum UserActionEnum {
    SET_DATA = "user/SET_DATA",
    SET_LOADING_STATE = "user/SET_LOADING_STATE",
    FETCH_SIGN_IN = "user/FETCH_SIGN_IN",
    FETCH_SIGN_UP = "user/FETCH_SIGN_UP",
    FETCH_USER_DATA = "user/FETCH_USER_DATA",
}

export const actionUser = {
    setUserData: (payload: UserStateType["data"]): ReturnActionTypes<SetUserDataActionType> => ({
        type: UserActionEnum.SET_DATA, payload
    } as const),
    setLoadingState: (payload: LoadingStatusEnum): ReturnActionTypes<SetLoadingActionType> => ({
        type: UserActionEnum.SET_LOADING_STATE, payload
    } as const),
    fetchSignIn: (payload: LoginFormPropsType): ReturnActionTypes<FetchSignInActionType> => ({
        type: UserActionEnum.FETCH_SIGN_IN, payload
    } as const),
    fetchSignUp: (payload: RegisterFormPropsType): ReturnActionTypes<FetchSignUpActionType> => ({
        type: UserActionEnum.FETCH_SIGN_UP, payload
    } as const),
    fetchUserData: (): ReturnActionTypes<FetchUserDataActionType> => ({
        type: UserActionEnum.FETCH_USER_DATA
    })
}

type SetUserDataActionType = {
    type: UserActionEnum.SET_DATA,
    payload: UserStateType["data"],
}

type SetLoadingActionType = {
    type: UserActionEnum.SET_LOADING_STATE,
    payload: LoadingStatusEnum
}

export type FetchSignInActionType = {
    type: UserActionEnum.FETCH_SIGN_IN,
    payload: LoginFormPropsType
}

export type FetchSignUpActionType = {
    type: UserActionEnum.FETCH_SIGN_UP,
    payload: RegisterFormPropsType
}

export type FetchUserDataActionType = {
    type: UserActionEnum.FETCH_USER_DATA,
}

type ReturnActionTypes<T> = T & Action<UserActionEnum>
export type UserActionTypes = InferActionTypes<typeof actionUser>