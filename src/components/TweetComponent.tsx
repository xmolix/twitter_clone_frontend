import React, {FC} from 'react';
import {Avatar, Fade, Grid, IconButton, ImageList, ImageListItem, Paper, styled, Typography} from "@mui/material";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import {grey} from "@mui/material/colors";
import RetweetIcon from "@mui/icons-material/ScreenRotationAltOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StatisticIcon from "@mui/icons-material/AssessmentOutlined";
import UploadIcon from "@mui/icons-material/FileUploadOutlined";
import {classesAvatar, classesTweet} from "../pages/Home/theme";
import {NavLink} from "react-router-dom";
import {TweetType} from "../store/storeTypes";
import {formatDate} from "../utils/formatDate";
import MoreHorizIcon from "@mui/icons-material/MoreHorizOutlined";
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';
import WriteIcon from '@mui/icons-material/CreateOutlined';
import {useDispatch} from "react-redux";
import {actionTweets} from "../store/ducks/tweets/actionCreators";

const TweetContent = styled(Paper)({
    padding: "15px 15px 5px 15px",
    "&:hover": {
        backgroundColor: grey[100],
        cursor: "pointer",
    },
})

const NavLinkContainer = styled(Typography)(() => ({
    "& a": {
        textDecoration: 'none',
        color: "inherit",
    },
})) as typeof Typography

const UserName = styled(Typography)(() => ({
    "& span": {
        color: grey["500"],
    }
})) as typeof Typography

const TweetIcon = styled(IconButton)({
    marginRight: 5,
    "& svg": {
        fontSize: 20,
    },
})

const MoreMenu = styled(Menu)({
    "& div": {
        borderRadius: 12,
        boxShadow: "rgba(101, 119, 134, 0.2) 0px 0px 15px," +
            "rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
    },

    "& ul": {
        width: '100%',
        padding: 0,

        "& li": {
            display: "flex",
            padding: "12px 16px",

            "& svg": {
                marginRight: 12,
            },

            "& p": {
                fontWeight: 'bold',
                fontSize: 15,
            }
        }
    }
})

export const TweetComponent: FC<TweetType> = ({ _id, user, text, images, createdAt }) => {
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorEl(null)
    }

    const handleRemove = (event: React.MouseEvent<HTMLElement>, id: string): void => {
        handleClose(event)
        dispatch(actionTweets.removeTweet(id))
    }

    const options = ([
        {
            id: _id,
            data: <><DeleteForeverIcon color={"error"} />
                <Typography color={"error"}>Удалить</Typography>
            </>,
            onClick: (e: React.MouseEvent<HTMLElement>) => handleRemove(e, _id)
        },
        {id: 2, data: <><WriteIcon /><Typography>Редактировать</Typography></>}
    ])

    return (
            <TweetContent key={_id} sx={classesTweet} variant={"outlined"}>
                <NavLinkContainer component={"div"}>
                    <NavLink to={`/home/tweet/${_id}`}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <Avatar alt={`Аватар пользователя - ${user.fullName}`}
                                        sx={classesAvatar}
                                        src={user.avatar}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <UserName component={"div"}>
                                    <b>{user.fullName}</b>&nbsp;
                                    <span>{`@${user.userName}`}</span>&nbsp;
                                    <span>·</span>&nbsp;
                                    <span>{formatDate(new Date(createdAt))}</span>
                                </UserName>
                                <Typography component={"div"} lineHeight={1.31} sx={{ wordBreak: "break-word" }}>
                                    {text}
                                </Typography>
                                { images !== undefined && images[0] && <>
                                    <Typography component={"div"} sx={{ height: 285,}}>
                                    <ImageList sx={{ width: "100%",
                                        height: "100%",
                                        overflow: "hidden",
                                        borderRadius: 5,
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        objectFit: "cover"
                                    }} cols={1}>
                                        {images.map((item) => (
                                            <ImageListItem key={item}>
                                                <img src={item}
                                                     srcSet={item}
                                                     alt={item}
                                                     loading="lazy"
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                    </Typography>
                                </>}
                            <Grid container alignItems={"center"} marginTop={.8} columnSpacing={1}>
                                <Grid container alignItems={"center"} item xs={2}>
                                    <Tooltip TransitionComponent={Fade}
                                             TransitionProps={{ timeout: 300 }}
                                             enterDelay={1000}
                                             title="Ответить">
                                        <TweetIcon>
                                            <CommentIcon />
                                        </TweetIcon>
                                    </Tooltip>
                                    <Typography color={grey["700"]}>37</Typography>
                                </Grid>
                                <Grid container alignItems={"center"} item xs={2}>
                                    <Tooltip TransitionComponent={Fade}
                                             TransitionProps={{ timeout: 300 }}
                                             enterDelay={1000}
                                             title="Ретвитнуть">
                                        <TweetIcon>
                                            <RetweetIcon />
                                        </TweetIcon>
                                    </Tooltip>
                                    <Typography color={grey["700"]}>14</Typography>
                                </Grid>
                                <Grid container alignItems={"center"} item xs={2}>
                                    <Tooltip TransitionComponent={Fade}
                                             TransitionProps={{ timeout: 300 }}
                                             enterDelay={1000}
                                             title="Нравиться">
                                        <TweetIcon>
                                            <LikeIcon />
                                        </TweetIcon>
                                    </Tooltip>
                                    <Typography color={grey["700"]}>479</Typography>
                                </Grid>
                                <Grid container alignItems={"center"} item xs={2}>
                                    <Tooltip TransitionComponent={Fade}
                                             TransitionProps={{ timeout: 300 }}
                                             enterDelay={1000}
                                             title="Посмотреть">
                                        <TweetIcon>
                                            <StatisticIcon />
                                        </TweetIcon>
                                    </Tooltip>
                                    <Typography color={grey["700"]}>5683</Typography>
                                </Grid>
                                <Grid container alignItems={"center"} item xs={2}>
                                    <Tooltip TransitionComponent={Fade}
                                             TransitionProps={{ timeout: 300 }}
                                             enterDelay={1000}
                                             title="Поделиться">
                                        <TweetIcon>
                                            <UploadIcon />
                                        </TweetIcon>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                            <Grid item xs={1}>
                                <Tooltip TransitionComponent={Fade}
                                         TransitionProps={{ timeout: 300 }}
                                         enterDelay={1000}
                                         title="Ещё">
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}>
                                        <MoreHorizIcon />
                                    </IconButton>
                                </Tooltip>
                                    <MoreMenu
                                        id="long-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option.id} selected={false} onClick={option.onClick}>
                                                {option.data}
                                            </MenuItem>
                                        ))}
                                    </MoreMenu>
                            </Grid>
                    </Grid>
                </NavLink>
            </NavLinkContainer>
        </TweetContent>
    )
}