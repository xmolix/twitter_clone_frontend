import { axios } from "../../core/axios";
import {TweetType} from "../../store/storeTypes";

type Response<T> = {
    status: string,
    data: T,
}

export const TweetsAPI = {
    async fetchTweets(): Promise<TweetType[]> {
        const { data } = await axios.get<Response<TweetType[]>>("/tweets")
        return data.data
    },
    async fetchTweetData(tweetID: string): Promise<TweetType> {
        const { data } = await axios.get<Response<TweetType>>(`/tweets/${tweetID}`)
        return data.data
    },
    async fetchAddTweet(payload: TweetType["text"]): Promise<TweetType> {
        const { data } = await axios.post<Response<TweetType>>("/tweets", { text: payload })
        return data.data
    }
}