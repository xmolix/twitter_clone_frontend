export enum LoadingStateEnum {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

export type TweetType = {
    _id: string,
    user: {
        fullName: string,
        userName: string,
        avatar: string,
    },
    text: string,
    createdAt: string,
}