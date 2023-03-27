import {LoadingStatusEnum} from "../../../storeTypes";

type UserType = {
    _id?: string,
    email: string,
    fullName: string,
    userName: string,
    password: string,
    confirmed?: boolean,
    confirmHash: string,
    location?: string,
    about?: string,
    website?: string,
}

export type UserStateType = {
    data: UserType | undefined,
    status: LoadingStatusEnum,
}