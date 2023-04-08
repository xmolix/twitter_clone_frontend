import React, {FC, useRef, useState} from 'react';
import {makeStyles} from "@mui/styles";
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import MessageIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {Theme} from "@mui/material/styles";
import {LoginModal} from "./components/LoginModal";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {RegisterModal} from "./components/RegisterModal";

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        display: "flex",
        height: "calc(100vh - 84px)",
    },
    blueSide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#71C9F8",
        flex: "0 0 50%",
        position: "relative",
        overflow: "hidden",
    },
    blueSideBigIcon: {
        position: "absolute",
        left: "70%",
        top: "55%",
        transform: "translate(-50%, -50%)",
        width: "180% !important",
        height: "180% !important",
    },
    blueSideListInfo: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        width: 400,
        position: "relative",
        "& h6": {
            display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            "& svg": {
                fontSize: 32,
                marginRight: 15,
            },
        },
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    loginSide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 50%",
    },
    loginSideWrapper: {
        width: 380,
        "& svg": {
            fontSize: 45,
        },
    },
    loginSideTitle: {
        fontSize: "32px !important",
        fontWeight: "bold !important",
        marginTop: "10px !important",
        marginBottom: "45px !important",
    },
}))

export const SingIn: FC = () => {
    const classes = useStyles()

    const [open, setOpen] = useState<ModalType>();

    const enterRef = useRef<HTMLInputElement>(null)

    const handleClickOpen = (param: ModalType) => {
        setOpen(param)
        setTimeout(() => {
            if (enterRef.current != null) {
                enterRef.current.focus()
            }
        }, 100)
    }

    const handleClose = () => {
        setOpen(undefined)
    }

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color={"primary"}
                             className={classes.blueSideBigIcon}
                />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant={"h6"}>
                            <SearchIcon />Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant={"h6"}>
                            <PeopleIcon />Узнайте, о чём говорят в мире.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant={"h6"}>
                            <MessageIcon />Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color={"primary"} />
                    <Typography variant={"h4"}
                                className={classes.loginSideTitle}>
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography fontWeight={"bold"}>
                        Присоединяйтесь к Твиттеру прямо сейчас!
                    </Typography>
                    <br/>
                    <Button onClick={() => handleClickOpen("registration")}
                            variant={"contained"}
                            color={"primary"}
                            style={{ marginBottom: 15 }}
                            fullWidth
                    >Зарегистрироваться</Button>
                    <Button onClick={() => handleClickOpen("singIn")}
                            variant={"outlined"}
                            color={"primary"}
                            fullWidth
                    >Войти</Button>
                    <LoginModal open={open === "singIn"} handleClose={handleClose} enterRef={enterRef} />
                    <RegisterModal open={open === "registration"} handleClose={handleClose} enterRef={enterRef} />
                </div>
            </section>
        </div>
    )
}

type ModalType = "singIn" | "registration"