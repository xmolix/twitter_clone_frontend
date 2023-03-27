import { axios } from "../../core/axios";
import {TweetType} from "../../store/storeTypes";
import {ResponseAPIType} from "./types";

export const TweetsAPI = {
    async fetchTweets(): Promise<TweetType[]> {
        const { data } = await axios.get<ResponseAPIType<TweetType[]>>("/tweets")
        return data.data
    },
    async fetchTweetData(tweetID: string): Promise<TweetType> {
        const { data } = await axios.get<ResponseAPIType<TweetType>>(`/tweets/${tweetID}`)
        return data.data
    },
    async fetchAddTweet(payload: TweetType["text"]): Promise<TweetType> {
        const { data } = await axios.post<ResponseAPIType<TweetType>>("/tweets", { text: payload })
        return data.data
    }
}