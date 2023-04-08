import { axios } from "../../core/axios";
import {ResponseAPIType} from "./types";
import {LoginFormPropsType} from "../../pages/SingIn/components/LoginModal";
import {UserStateType} from "../../store/ducks/user/contacts/state";
import {RegisterFormPropsType} from "../../pages/SingIn/components/RegisterModal";

export const AuthAPI = {
    async singIn(postData: LoginFormPropsType): Promise<ResponseAPIType<UserStateType["data"]>> {
        const { data } = await axios.post<ResponseAPIType<UserStateType["data"]>>("/auth/sign-in",
            { userName: postData.email, password: postData.password })
        return data
    },
    async singUp(postData: RegisterFormPropsType): Promise<ResponseAPIType<UserStateType["data"]>> {
        const { data } = await axios.post<ResponseAPIType<UserStateType["data"]>>("/auth/sign-up", {
            email: postData.email,
            fullName: postData.fullName,
            userName: postData.userName,
            password: postData.password,
            repeatPassword: postData.repeatPassword,
        })
        return data
    },
    async getMe(): Promise<ResponseAPIType<UserStateType["data"]>> {
        const { data } = await axios.get<ResponseAPIType<UserStateType["data"]>>("/users/me")
        return data
    }
}