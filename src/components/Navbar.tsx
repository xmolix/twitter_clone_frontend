import React, {FC, useRef, useState} from 'react';
import {Button, FormControl, FormGroup, Hidden, IconButton, Stack, styled, Typography} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListIcon from "@mui/icons-material/ListAltOutlined";
import PersonIcon from "@mui/icons-material/Person2Outlined";
import MoreIcon from "@mui/icons-material/MoreOutlined";
import WriteIcon from '@mui/icons-material/CreateOutlined';
import DialogContent from "@mui/material/DialogContent";
import {TwitterModal} from "./Modals/TwitterModal";
import {TweetTextFieldForm} from "./TweetTextFieldForm";
import {classesAvatar, classesTweet} from "../pages/Home/theme";
import {NavLink, useNavigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../store/ducks/user/selectors";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {actionUser} from "../store/ducks/user/actionCreators";

const TwitterNavbarStack = styled(Stack)({
    "a": {
        textDecoration: "none",
    }
})

const TwitterNavbarBtn = styled(IconButton)({
    display: "flex",
    borderRadius: 30,
    marginBottom: 5,
    position: "relative",
    transition: "all .3s ease",
    "& svg": {
        fontSize: 30,
    }
})

const UserNavbarBtn = styled(IconButton)({
    borderRadius: 30,
    color: "black",
    position: "absolute",
    bottom: 30,
})

const TwitterNavbarNames = styled(Typography)({
    color: "black",
    marginLeft: 16,
    paddingRight: 5,
})

const classesTweetBtn = {
    width: "90%",
    marginTop: 1
}

const UserNavbarMenu = styled(Menu)({
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
            fontWeight: "bold",
        }
    }
})

export const Navbar: FC = () => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const openMenu = Boolean(anchorEl)

    const redirect = useNavigate()

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorEl(null)
    }

    const handleSingOut = () => {
        dispatch(actionUser.fetchSignOut())
        setAnchorEl(null)
        redirect("/sing-in")
    }

    const userData = useSelector(selectUser)

    const enterRef = useRef<HTMLInputElement>()

    const handleClickOpen = () => {
        setOpen(true)
        setTimeout(() => {
            if (enterRef.current != null) {
                enterRef.current.focus()
            }
        }, 100)
    }

    const handleClose = () => {
        setOpen(false)
    }

    // if (!userData) {
    //     return null
    // }

    return (
        <>
            <TwitterNavbarStack alignItems={"start"} position={"sticky"} top={4}>
                <NavLink to={"/home"}>
                    <TwitterNavbarBtn aria-label="twitter">
                        <TwitterIcon color={"primary"} />
                    </TwitterNavbarBtn>
                </NavLink>
                <NavLink to={"/home"} >
                <TwitterNavbarBtn aria-label="twitter">
                    <HomeIcon />
                    <Hidden lgDown>
                            <TwitterNavbarNames variant={"h6"}>
                                Главная
                            </TwitterNavbarNames>
                    </Hidden>
                </TwitterNavbarBtn>
                </NavLink>
                <TwitterNavbarBtn aria-label="twitter">
                    <SearchIcon />
                    <Hidden lgDown>
                        <TwitterNavbarNames variant={"h6"}>
                            Поиск
                        </TwitterNavbarNames>
                    </Hidden>
                </TwitterNavbarBtn>
                <TwitterNavbarBtn aria-label="twitter">
                    <NotificationsIcon />
                    <Hidden lgDown>
                        <TwitterNavbarNames variant={"h6"}>
                            Уведомление
                        </TwitterNavbarNames>
                    </Hidden>
                </TwitterNavbarBtn>
                <TwitterNavbarBtn aria-label="twitter">
                    <EmailIcon />
                    <Hidden lgDown>
                        <TwitterNavbarNames variant={"h6"}>
                            Сообщение
                        </TwitterNavbarNames>
                    </Hidden>
                </TwitterNavbarBtn>
                <TwitterNavbarBtn aria-label="twitter">
                    <BookmarkIcon />
                    <Hidden lgDown>
                        <TwitterNavbarNames variant={"h6"}>
                            Закладки
                        </TwitterNavbarNames>
                    </Hidden>
                </TwitterNavbarBtn>
                <TwitterNavbarBtn aria-label="twitter">
                    <ListIcon />
                    <Hidden lgDown>
                        <TwitterNavbarNames variant={"h6"}>
                            Списки
                        </TwitterNavbarNames>
                    </Hidden>
                </TwitterNavbarBtn>
                <NavLink to={"/users/me"} >
                <TwitterNavbarBtn aria-label="twitter">
                    <PersonIcon />
                    <Hidden lgDown>
                        <TwitterNavbarNames variant={"h6"}>
                            Профиль
                        </TwitterNavbarNames>
                    </Hidden>
                </TwitterNavbarBtn>
                </NavLink>
                <TwitterNavbarBtn aria-label="twitter">
                    <MoreIcon />
                    <Hidden lgDown>
                        <TwitterNavbarNames variant={"h6"}>
                            Ещё
                        </TwitterNavbarNames>
                    </Hidden>
                </TwitterNavbarBtn>
                <Button onClick={handleClickOpen} variant={"contained"}
                        color={"primary"}
                        sx={classesTweetBtn}>
                    <Hidden lgDown>Твитнуть</Hidden>
                    <Hidden lgUp>
                        <WriteIcon />
                    </Hidden>
                </Button>
                <TwitterModal open={open}
                              handleClose={handleClose}
                              maxWidth={"md"}>
                    <DialogContent style={{padding: "0 15px"}}>
                        <FormControl component={"fieldset"} fullWidth>
                            <FormGroup aria-label={"position"}>
                                <TweetTextFieldForm
                                    classesTweet={classesTweet}
                                    classesAvatar={classesAvatar}
                                />
                            </FormGroup>
                        </FormControl>
                    </DialogContent>
                </TwitterModal>
            </TwitterNavbarStack>
            {userData !== undefined
                ? <>
                <UserNavbarBtn aria-label="exit-menu"
                               id="long-button-menu"
                               aria-controls={open ? 'long-menu-exit' : undefined}
                               aria-expanded={open ? 'true' : undefined}
                               aria-haspopup="true"
                               onClick={handleOpenMenu}>
                    <Grid item xs={1} mr={4.5}>
                        <Avatar src={"https://64.media.tumblr.com/21ca7812a6979674881adea2c87aba6b/49653c1a364b4717-28/s250x400/18d7e359505c7b5e347d201a6729395b0ebe4246.png"}/>
                    </Grid>
                    <Grid item xs={10}>
                        <Stack alignItems={"start"}>
                            <Typography component={"div"}>{userData.fullName}</Typography>
                            <Typography>@{userData.userName}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item container justifyContent={"center"} xs={1} m={1}>
                        <ArrowDownIcon />
                    </Grid>
                </UserNavbarBtn>
                <UserNavbarMenu
                    id="long-menu-exit"
                    MenuListProps={{
                        'aria-labelledby': 'long-button-menu',
                    }}
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                        <MenuItem selected={false} onClick={handleSingOut}>
                            Выйти из учётной записи @{userData.userName}
                        </MenuItem>
                </UserNavbarMenu>
                </> : null}
        </>
    )
}
