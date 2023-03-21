import React, {FC} from 'react';
import {Avatar, Fade, Grid, IconButton, Paper, styled, Typography} from "@mui/material";
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

const TweetContent = styled(Paper)({
    padding: "15px 15px 5px 15px",
    "&:hover": {
        backgroundColor: grey[100],
        cursor: "pointer",
    },
})

const NavLinkContainer = styled(Typography)({
    "& a": {
        textDecoration: 'none',
        color: "inherit",
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

export const TweetComponent: FC<TweetType> = ({ _id, user, text, createdAt }) => {
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

    const options = ([
        {
            id: 1,
            data: <><DeleteForeverIcon color={"error"} />
                <Typography color={"error"}>Удалить</Typography>
            </>
        },
        {id: 2, data: <><WriteIcon /><Typography>Редактировать</Typography></>}
    ])

    return (
            <TweetContent key={_id} sx={classesTweet} variant={"outlined"}>
                <NavLinkContainer>
                    <NavLink to={`/home/tweet/${_id}`}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <Avatar alt={`Аватар пользователя - ${user.fullName}`}
                                        sx={classesAvatar}
                                        src={user.avatar}
                                />
                            </Grid>
                            <Grid item xs={10}>
                            <UserName>
                                <b>{user.fullName}</b>&nbsp;
                                <span>{`@${user.userName}`}</span>&nbsp;
                                <span>·</span>&nbsp;
                                <span>{formatDate(new Date(createdAt))}</span>
                            </UserName>
                            <Typography lineHeight={1.31}>
                                {text}
                            </Typography>
                            <Grid container alignItems={"center"} marginTop={.8} columnSpacing={1}>
                                <Grid container alignItems={"center"} xs={2}>
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
                                <Grid container alignItems={"center"} xs={2}>
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
                                <Grid container alignItems={"center"} xs={2}>
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
                                <Grid container alignItems={"center"} xs={2}>
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
                                <Grid container alignItems={"center"} xs={2}>
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
                                            <MenuItem key={option.id} selected={false} onClick={handleClose}>
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

// type TweetPropsType = {
//     user: {
//         fullName: string,
//         userName: string,
//         time: string,
//         avatar: string,
//     },
//     text: string,
//     id: string,
// }