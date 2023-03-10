import React, {FC, useRef, useState} from 'react';
import {makeStyles} from "@mui/styles";
import {Button, FormControl, FormGroup, Typography} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import MessageIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import {TwitterModal} from "../components/Modals/TwitterModal";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {Theme} from "@mui/material/styles";

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
    registrationTitle: {
        display: "flex",
        justifyContent: "end",
        position: "relative",
        "& svg": {
            position: "absolute",
            top: -1,
            width: "100%",
            textAlign: "center",
            fontSize: 30,
        },
    },
    registration: {
        padding: "15px 19px !important"
    }
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
                    <TwitterModal open={open === "singIn"}
                                  handleClose={handleClose}
                                  title={"Войти в Твиттер"}>
                        <DialogContent style={{padding: "0 15px 8px"}}>
                            <FormControl component={"fieldset"} fullWidth>
                                <FormGroup aria-label={"position"} row>
                                    <TextField
                                        margin="normal"
                                        id="name"
                                        label="E-mail"
                                        type="email"
                                        fullWidth
                                        variant="filled"
                                        inputRef={enterRef}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="name"
                                        label="Пароль"
                                        type="password"
                                        fullWidth
                                        variant="filled"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Button onClick={handleClose}
                                            variant={"contained"}
                                            style={{ margin: "12px 0 8px 0" }}
                                            fullWidth
                                    >Войти</Button>
                                </FormGroup>
                            </FormControl>
                        </DialogContent>
                    </TwitterModal>
                    <Dialog open={open === "registration"} onClose={handleClose} fullWidth>
                        <DialogContent className={classes.registration}>
                            <FormControl component={"fieldset"} fullWidth>
                                <FormGroup aria-label={"position"}>
                                    <div className={classes.registrationTitle}>
                                        <TwitterIcon color={"primary"} />
                                        <Button onClick={handleClose} variant={"contained"}>Далее</Button>
                                    </div>
                                    <div>
                                        <DialogContentText>
                                            <Typography variant={"h6"}
                                                        fontWeight={"bold"}
                                                        color={"black"}
                                            >Создайте учётную запись</Typography>
                                        </DialogContentText>
                                        <TextField
                                            margin="normal"
                                            id="name"
                                            label="Имя"
                                            type="name"
                                            fullWidth
                                            variant="filled"
                                            InputLabelProps={{shrink: true}}
                                            inputRef={enterRef}
                                        />
                                        <TextField
                                            margin="dense"
                                            id="name"
                                            label="E-mail"
                                            type="email"
                                            fullWidth
                                            variant="filled"
                                            InputLabelProps={{shrink: true}}
                                        />
                                    </div>
                                </FormGroup>
                            </FormControl>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>
        </div>
    )
}

type ModalType = "singIn" | "registration"