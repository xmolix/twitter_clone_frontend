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
import {NavLink} from "react-router-dom";

const TwitterNavbarBtn = styled(IconButton)({
    display: "flex",
    borderRadius: 30,
    marginBottom: 5,
    position: "relative",
    transition: "all .3s ease",
    "& svg": {
        fontSize: 30,
    },
    "& a": {
        textDecoration: "none",
    }
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

export const Navbar: FC = () => {
    const [open, setOpen] = useState(false);

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

    return (
        <Stack alignItems={"start"} position={"sticky"} top={4}>
            <NavLink to={"/home"} >
                <TwitterNavbarBtn aria-label="twitter">
                    <TwitterIcon color={"primary"} />
                </TwitterNavbarBtn>
            </NavLink>
            <TwitterNavbarBtn aria-label="twitter">
                <HomeIcon />
                <Hidden lgDown>
                    <NavLink to={"/home"} >
                        <TwitterNavbarNames variant={"h6"}>
                            Главная
                        </TwitterNavbarNames>
                    </NavLink>
                </Hidden>
            </TwitterNavbarBtn>
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
            <TwitterNavbarBtn aria-label="twitter">
                <PersonIcon />
                <Hidden lgDown>
                    <TwitterNavbarNames variant={"h6"}>
                        Профиль
                    </TwitterNavbarNames>
                </Hidden>
            </TwitterNavbarBtn>
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
        </Stack>
    )
}
