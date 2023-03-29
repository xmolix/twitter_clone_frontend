import {AppStateType} from "../../store";
import {UserStateType} from "./contacts/state";

// export const useTypedSelector = <TSelected>(selector: (state: AppStateType) => TSelected) =>
//     useSelector(selector, shallowEqual)

const selectUserState = (state: AppStateType): UserStateType => state.user

export const selectUser = (state: AppStateType): UserStateType["data"] =>
    selectUserState(state).data

export const selectIsAuth = (state: AppStateType): boolean =>
    !!selectUserState(state).data

export const selectUserStatus = (state: AppStateType): UserStateType["status"] =>
    selectUserState(state).status