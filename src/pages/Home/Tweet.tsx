import React, {useEffect} from 'react';
import {MainHeader} from "../../components/MainHeader";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionTweet} from "../../store/ducks/tweet/actionCreators";
import {selectIsTweetLoading, selectTweetData} from "../../store/ducks/tweet/selectors";
import {Loading} from "../../components/Loading";
import {FullTweetComponent} from "./components/FullTweetComponent";

export const Tweet = () => {
    const dispatch = useDispatch()

    const params: {tweetID?: string} = useParams()
    const id = params.tweetID

    useEffect(() => {
        if (id) dispatch(actionTweet.fetchTweetDataActionType(id))

        return () => {
            dispatch(actionTweet.setTweetData(undefined))
        }
    }, [dispatch, id])

    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetLoading)

    return (
        <>
            <MainHeader title={"Твит"} backArrow />
            { !isLoading && tweetData
                ? <FullTweetComponent _id={tweetData._id}
                                      text={tweetData.text}
                                      user={tweetData.user}
                                      createdAt={tweetData.createdAt}
                />
                : <Loading />
            }
        </>
    )
}