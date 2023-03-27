import {call, put, takeLatest} from "redux-saga/effects";
import {UserStateType} from "./contacts/state";
import {actionUser, FetchUserDataActionType, UserActionEnum} from "./actionCreators";
import {LoadingStatusEnum} from "../../storeTypes";
import {AuthAPI} from "../../../services/api/authAPI";

export function* fetchSingInRequest({ payload }: FetchUserDataActionType): Generator {
    try {
        // @ts-ignore
        const { data }: UserStateType["data"] = yield call(AuthAPI.singIn, payload)
        window.localStorage.setItem("token", data.token)
        yield put(actionUser.setUserData(data))
    } catch (err) {
        yield put(actionUser.setLoadingState(LoadingStatusEnum.ERROR))
    }
}

export function* watchUserSaga() {
    yield takeLatest(UserActionEnum.FETCH_DATA, fetchSingInRequest)
}