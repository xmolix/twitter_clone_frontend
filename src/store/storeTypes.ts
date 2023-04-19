export enum LoadingStatusEnum {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
    SUCCESS = "SUCCESS",
}

export type TweetType = {
    _id: string,
    user: {
        fullName: string,
        userName: string,
        avatar: string,
    },
    text: string,
    images?: string[] | undefined,
    createdAt: string,
}