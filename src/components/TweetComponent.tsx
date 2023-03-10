import React, {FC} from 'react';
import {Avatar, Grid, IconButton, Paper, styled, Typography} from "@mui/material";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import {grey} from "@mui/material/colors";
import RetweetIcon from "@mui/icons-material/ScreenRotationAltOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StatisticIcon from "@mui/icons-material/AssessmentOutlined";
import UploadIcon from "@mui/icons-material/FileUploadOutlined";
import {classesAvatar, classesTweet} from "../pages/Home/theme";

const TweetContent = styled(Paper)({
    padding: "15px 15px 5px 15px",
    "&:hover": {
        backgroundColor: grey[100],
        cursor: "pointer",
    },
})

const UserName = styled(Typography)({
    "& span": {
        color: grey["500"],
    }
})

const TweetIcon = styled(IconButton)({
    marginRight: 5,
    "& svg": {
        fontSize: 20,
    },
})



export const TweetComponent: FC<TweetPropsType> = ({ id,  user, text }) => {
    return (
        <TweetContent key={id} sx={classesTweet} variant={"outlined"}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar alt={`Аватар пользователя - ${user.fullName}`}
                                sx={classesAvatar}
                                src={user.avatar}
                        />
                    </Grid>
                    <Grid item xs={11}>
                    <UserName>
                        <b>{user.fullName}</b>&nbsp;
                        <span>{`@${user.userName}`}</span>&nbsp;
                        <span>·</span>&nbsp;
                        <span>{user.time} ч</span>
                    </UserName>
                    <Typography>
                        {text}
                    </Typography>
                    <Grid container alignItems={"center"} marginTop={.8} columnSpacing={1}>
                        <Grid container alignItems={"center"} xs={2}>
                            <TweetIcon>
                                <CommentIcon />
                            </TweetIcon>
                            <Typography color={grey["700"]}>37</Typography>
                        </Grid>
                        <Grid container alignItems={"center"} xs={2}>
                            <TweetIcon>
                                <RetweetIcon />
                            </TweetIcon>
                            <Typography color={grey["700"]}>14</Typography>
                        </Grid>
                        <Grid container alignItems={"center"} xs={2}>
                            <TweetIcon>
                                <LikeIcon />
                            </TweetIcon>
                            <Typography color={grey["700"]}>479</Typography>
                        </Grid>
                        <Grid container alignItems={"center"} xs={2}>
                            <TweetIcon>
                                <StatisticIcon />
                            </TweetIcon>
                            <Typography color={grey["700"]}>5683</Typography>
                        </Grid>
                        <Grid container alignItems={"center"} xs={2}>
                            <TweetIcon>
                                <UploadIcon />
                            </TweetIcon>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </TweetContent>
    )
}

type TweetPropsType = {
    user: {
        fullName: string,
        userName: string,
        time: string,
        avatar: string,
    },
    text: string,
    id: string,

}