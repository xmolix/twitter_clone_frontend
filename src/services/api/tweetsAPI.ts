import axios from "axios";
import {TweetsStateType} from "../../store/ducks/tweets/contracts/state";
import {TweetType} from "../../store/storeTypes";

export const TweetsAPI = {
    fetchTweets(): Promise<TweetsStateType["items"]> {
        return axios.get("/tweets")
            .then(({ data }) => data)
    },
    fetchTweetData(tweetID: string): Promise<TweetType[]> {
        return axios.get(`/tweets?_id=${tweetID}`)
            .then(({data}) => data)
    },
    fetchAddTweet(payload: TweetType): Promise<TweetType> {
        return axios.post("/tweets", payload)
            .then(({data}) => data)
    }
}