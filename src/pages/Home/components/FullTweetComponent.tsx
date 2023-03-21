import React, {FC} from 'react';
import {classesAvatar, classesTweet} from "../theme";
import {TweetType} from "../../../store/storeTypes";
import format from 'date-fns/format';
import ruLang from "date-fns/locale/ru";

import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import RetweetIcon from "@mui/icons-material/ScreenRotationAltOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import UploadIcon from "@mui/icons-material/FileUploadOutlined";
import MoreHorizIcon from '@mui/icons-material/MoreHorizOutlined';

import {grey} from "@mui/material/colors";
import { styled } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const TweetContent = styled(Paper)({
    padding: "15px 15px 5px 15px",
})

const UserName = styled(Typography)({
    display: "flex",
    flexDirection: "column",
    "& span": {
        color: grey["500"],
    }
})

const TweetIcon = styled(IconButton)({
    "& svg": {
        fontSize: 23,
    },
})

export const FullTweetComponent: FC<TweetType> = ({ _id, user, text, createdAt }) => {
    return (
        <TweetContent key={_id} sx={classesTweet} variant={"outlined"}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar alt={`Аватар пользователя - ${user.fullName}`}
                                sx={classesAvatar}
                                src={user.avatar}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <UserName>
                            <b>{user.fullName}</b>
                            <span>{`@${user.userName}`}</span>
                        </UserName>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton aria-label="twitter">
                            <MoreHorizIcon />
                        </IconButton>
                    </Grid>
                    <Grid container flexDirection={"column"} px={3} pt={1.2}>
                        <Typography fontSize={18} lineHeight={1.31} sx={{ wordBreak: "break-word" }}>
                            {text}
                        </Typography>
                        <Typography py={1.5} borderBottom={`1px solid ${grey["200"]}`}>
                            <Typography fontSize={15} component={"span"} color={grey["500"]}>
                                { format(new Date(createdAt), "H:mm") } ·&nbsp;
                                { format(new Date(createdAt), "d LLL. Y г.", { locale: ruLang }) } ·&nbsp;
                                <Typography fontSize={15}  component={"span"}
                                            color={"black"}
                                            fontWeight={"bold"}>
                                    5 тыс.
                                </Typography>&nbsp;
                                просмотров</Typography>
                        </Typography>
                        <Grid container justifyContent={"start"} py={1.5} borderBottom={`1px solid ${ grey["200"] }`}>
                            <Typography component={"span"} fontSize={15}  mr={2}>
                                <b>14</b> ретвитов
                            </Typography>
                            <Typography component={"span"} fontSize={15}  mr={2}>
                                <b>0</b> твитов с цитатами
                            </Typography>
                            <Typography component={"span"} fontSize={15} >
                                <b>479</b> отметок «Нравится»
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={"end"} py={.5} borderBottom={`1px solid ${ grey["200"] }`}>
                            <Grid container justifyContent={"center"} xs={3}>
                                <TweetIcon>
                                    <CommentIcon />
                                </TweetIcon>
                            </Grid>
                            <Grid container justifyContent={"center"} xs={3}>
                                <TweetIcon>
                                    <RetweetIcon />
                                </TweetIcon>
                            </Grid>
                            <Grid container justifyContent={"center"} xs={3}>
                                <TweetIcon>
                                    <LikeIcon />
                                </TweetIcon>
                            </Grid>
                            <Grid container justifyContent={"center"} xs={3}>
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