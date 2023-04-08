import {call, put, takeLatest} from "redux-saga/effects";
import {UserStateType} from "./contacts/state";
import {actionUser, FetchSignInActionType, FetchSignUpActionType, UserActionEnum} from "./actionCreators";
import {LoadingStatusEnum} from "../../storeTypes";
import {AuthAPI} from "../../../services/api/authAPI";

export function* fetchSingInRequest({ payload }: FetchSignInActionType): Generator {
    try {
        yield put(actionUser.setLoadingState(LoadingStatusEnum.LOADING))
        // @ts-ignore
        const { data }: UserStateType["data"] = yield call(AuthAPI.singIn, payload)
        window.localStorage.setItem("token", data.token)
        yield put(actionUser.setUserData(data))
    } catch (err) {
        yield put(actionUser.setLoadingState(LoadingStatusEnum.ERROR))
    }
}

export function* fetchSingUpRequest({payload}: FetchSignUpActionType): Generator {
    try {
        yield put(actionUser.setLoadingState(LoadingStatusEnum.LOADING))
        yield call(AuthAPI.singUp, payload)
        yield put(actionUser.setLoadingState(LoadingStatusEnum.SUCCESS))
    } catch (err) {
        yield put(actionUser.setLoadingState(LoadingStatusEnum.ERROR))
    }
}

export function* fetchUserDataRequest(): Generator {
    try {
        yield put(actionUser.setLoadingState(LoadingStatusEnum.LOADING))
        // @ts-ignore
        const { data } = yield call(AuthAPI.getMe)
        yield put(actionUser.setUserData(data))
    } catch (e) {
        yield put(actionUser.setLoadingState(LoadingStatusEnum.ERROR))
    }
}

export function* watchUserSaga() {
    yield takeLatest(UserActionEnum.FETCH_SIGN_IN, fetchSingInRequest)
    yield takeLatest(UserActionEnum.FETCH_SIGN_UP, fetchSingUpRequest)
    yield takeLatest(UserActionEnum.FETCH_USER_DATA, fetchUserDataRequest)
}