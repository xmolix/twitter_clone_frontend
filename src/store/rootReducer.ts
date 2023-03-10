import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/reducer";
import {tweetReducer} from "./ducks/tweet/reducer";
import {topicsReducer} from "./ducks/topics/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tweet: tweetReducer,
    topics: topicsReducer,
})