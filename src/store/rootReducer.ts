import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/reducer";
import {tweetReducer} from "./ducks/tweet/reducer";
import {topicsReducer} from "./ducks/topics/reducer";
import {userReducer} from "./ducks/user/reducer";
import {whomReadReducer} from "./ducks/whomRead/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tweet: tweetReducer,
    topics: topicsReducer,
    user: userReducer,
    whomRead: whomReadReducer,
})