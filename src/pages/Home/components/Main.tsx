import React, {useEffect} from 'react';
import {classesAvatar, classesTweet, classTweetTextField} from "../theme";
import {MainHeader} from "../../../components/MainHeader";
import {TweetTextFieldForm} from "../../../components/TweetTextFieldForm";
import Typography from "@mui/material/Typography";
import {TweetComponent} from "../../../components/TweetComponent";
import {useDispatch, useSelector} from "react-redux";
import {selectIsTweetsLoading, selectTweets} from "../../../store/ducks/tweets/selectors";
import {actionTweets} from "../../../store/ducks/tweets/actionCreators";
import {Loading} from "../../../components/Loading";

export const Main = () => {
    const dispatch = useDispatch()

    const tweets = useSelector(selectTweets)
    const isLoadingTweets = useSelector(selectIsTweetsLoading)

    useEffect(() => {
        dispatch(actionTweets.fetchTweets())
    }, [dispatch])

    return (
        <>
            <MainHeader title={"Главная"} />
            <TweetTextFieldForm classesTweet={classesTweet}
                                classesAvatar={classesAvatar}
            />
            <Typography sx={classTweetTextField} component={"hr"} />
                { isLoadingTweets
                    ? <Loading />
                    : tweets.map(tweet =>
                        <TweetComponent _id={tweet._id}
                                        text={tweet.text}
                                        createdAt={tweet.createdAt}
                                        user={{
                                           fullName: tweet.user.fullName,
                                           userName: tweet.user.userName,
                                           avatar: tweet.user.avatar,
                                       }}
                        />
                    )
                }
        </>
    )
}