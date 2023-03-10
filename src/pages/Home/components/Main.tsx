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
import {styled} from "@mui/material";
import { NavLink } from 'react-router-dom';
import {grey} from "@mui/material/colors";
import Paper from "@mui/material/Paper";

const NavLinkContainer = styled(Typography)({
    "& a": {
        textDecoration: 'none',
        color: "inherit",
    },
})

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
                        <NavLinkContainer>
                            <NavLink to={`/home/tweet/${tweet._id}`}>
                            <TweetComponent id={tweet._id}
                                            text={tweet.text}
                                            user={{
                                               fullName: tweet.user.fullName,
                                               userName: tweet.user.userName,
                                               time: tweet.user.time,
                                               avatar: tweet.user.avatar,
                                           }}
                            />
                            </NavLink>
                        </NavLinkContainer>
                        )
                }
        </>
    )
}