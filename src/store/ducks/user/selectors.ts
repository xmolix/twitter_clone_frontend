import {AppStateType} from "../../store";
import {UserStateType} from "./contacts/state";
import {LoadingStatusEnum} from "../../storeTypes";

// export const useTypedSelector = <TSelected>(selector: (state: AppStateType) => TSelected) =>
//     useSelector(selector, shallowEqual)

const selectUserState = (state: AppStateType): UserStateType => state.user

export const selectUser = (state: AppStateType): UserStateType["data"] =>
    selectUserState(state).data

export const selectUserIsAuth = (state: AppStateType): boolean =>
    !!selectUserState(state).data

export const selectUserStatus = (state: AppStateType): UserStateType["status"] =>
    selectUserState(state).status

export const selectUserIsSuccess = (state: AppStateType): boolean =>
    selectUserState(state).status === LoadingStatusEnum.SUCCESS

export const selectUserIsLoaded = (state: AppStateType): boolean =>
    selectUserState(state).status === LoadingStatusEnum.LOADED
