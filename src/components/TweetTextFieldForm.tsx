import React, {FC, FormEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ClassesAvatarType, ClassesTweetType} from "../pages/Home/theme";
import {actionTweets} from "../store/ducks/tweets/actionCreators";
import {selectAddTweetState} from "../store/ducks/tweets/selectors";
import {AddTweetEnum} from "../store/ducks/tweets/contracts/state";

import ImageIcon from "@mui/icons-material/CropOriginal";
import EmojiIcon from "@mui/icons-material/EmojiEmotionsOutlined";

import {styled} from '@mui/material';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {Loading} from "./Loading";
import {Notification} from "./Notification";

const TweetTextField = styled(Paper)({
    padding: "20px 15px",
})

const Textarea = styled(TextareaAutosize)({
    border: "none",
    fontSize: 20,
    resize: "none",
    marginTop: 10,

    ":focus": {
        outline: "none",
    }
})

const Alert = styled(MuiAlert)({
    display: "flex",
    alignItems: "center",
    borderRadius: 30,
    boxShadow: "0 2px 4px black",
    fontSize: 18,
    width: '100%',

    "& .MuiAlert-action": {
        padding: "4px 0 4px 16px"
    }
})

const classesCircleProgress = {
    position: "relative",
    margin: "7px 40px",
    "& .MuiCircularProgress-root": {
        position: "absolute",
        // right: 10,
        // top: 7,
    },
}

const MAX_LENGTH = 280 - 1

export const TweetTextFieldForm: FC<TweetTextFieldFormPropsType> = (
    { classesTweet, classesAvatar }
) => {
    const dispatch = useDispatch()

    const [text, setText] = useState<string>("")
    // const [visibleNotification, setVisibleNotification] = useState<boolean>(false)

    const textLimitPercent = Math.round((text.length / MAX_LENGTH) * 100)

    const circleColor = text.length >= MAX_LENGTH - 20
        ? text.length <= MAX_LENGTH - 1
            ? "warning" : "error" : "primary"

    const addTweetState = useSelector(selectAddTweetState)
    //
    // useEffect(() => {
    //     if (addTweetState === AddTweetEnum.ERROR) {
    //         setVisibleNotification(true)
    //     }
    // }, [addTweetState])
    //
    // const handleCloseNotification = () => {
    //     setVisibleNotification(false)
    // }

    const handleChangeTextarea = (e: FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddTweet = (): void => {
        dispatch(actionTweets.fetchAddTweet(text))
        setText("")
    }

    return (
        <>
            <TweetTextField sx={classesTweet} variant={"outlined"}>
                <Grid container alignItems={"start"}>
                    <Grid item xs={1}>
                        <Avatar alt={`Аватар пользователя - `}
                                sx={classesAvatar}
                                src={"https://64.media.tumblr.com/21ca7812a6979674881adea2c87aba6b/49653c1a364b4717-28/s250x400/18d7e359505c7b5e347d201a6729395b0ebe4246.png"}
                        />
                    </Grid>
                    <Grid item xs={11} minHeight={120}
                          container
                          justifyContent={"space-between"}>
                        <Textarea onChange={handleChangeTextarea}
                                  placeholder={"Что происходит?"}
                                  sx={{ width: "100%", marginBottom: 3 }}
                                  maxRows={15}
                                  value={text}
                        />
                        <Grid container columnSpacing={1} sx={{marginTop: 3}}>
                            <Grid xs={6}>
                                <IconButton>
                                    <ImageIcon color={"primary"} />
                                </IconButton>
                                <IconButton>
                                    <EmojiIcon color={"primary"} />
                                </IconButton>
                            </Grid>
                            <Grid xs={6} container justifyContent={"end"}>
                                <Grid sx={classesCircleProgress}>
                                    { text && <>
                                        <Typography component={"span"} margin={1}>
                                            { text.length >= MAX_LENGTH - 20
                                                && MAX_LENGTH - text.length }
                                        </Typography>
                                        <CircularProgress variant={"determinate"}
                                                          sx={{color: "rgba(0, 0, 0, .1)"}}
                                                          size={30}
                                                          thickness={5}
                                                          value={100}
                                        />
                                        <CircularProgress variant={"determinate"}
                                                          color={circleColor}
                                                          thickness={5}
                                                          size={30}
                                                          value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                        />
                                    </> }
                                </Grid>
                                <Button onClick={handleClickAddTweet}
                                        variant={"contained"}
                                        disabled={!text
                                            || text.length > MAX_LENGTH
                                            || addTweetState === AddTweetEnum.LOADING}>
                                    { addTweetState === AddTweetEnum.LOADING
                                        ? <Loading color={"inherit"} marginX={2.45} />
                                        : "Твитнуть"
                                    }
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </TweetTextField>
            <Notification visible={addTweetState === AddTweetEnum.ERROR} severity={"error"}>
                Ошибка при добавлении твита <Typography component={"span"} role={"img"}>☹️</Typography>
            </Notification>
            {/*<Snackbar open={visibleNotification} autoHideDuration={10000}*/}
            {/*          anchorOrigin={{vertical: "bottom", horizontal: "center"}}*/}
            {/*          onClose={handleCloseNotification}>*/}
            {/*    <Alert onClose={handleCloseNotification} severity="error">*/}
            {/*        Ошибка при добавлении твита <Typography component={"span"} role={"img"}>☹️</Typography>*/}
            {/*    </Alert>*/}
            {/*</Snackbar>*/}
        </>
    )
}

type TweetTextFieldFormPropsType = {
    classesTweet: ClassesTweetType,
    classesAvatar: ClassesAvatarType,
}