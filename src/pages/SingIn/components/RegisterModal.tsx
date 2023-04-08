import React, {FC, RefObject, useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {styled} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {actionUser} from "../../../store/ducks/user/actionCreators";
import {Notification} from "../../../components/Notification";
import {LoadingStatusEnum} from "../../../store/storeTypes";
import {selectUserIsSuccess} from "../../../store/ducks/user/selectors";

const RegistrationDialogContent = styled(DialogContent)({
    padding: "15px 19px"
})

const RegistrationTitle = styled(Typography)({
    "&" : {
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
    }

})

const validationSchema = yup.object().shape({
    fullName: yup.string()
        .required("* Поле имени обязательно")
        .min(2, "* Допустимое кол-во символов в имени от 2 до 40")
        .max(40, "* Допустимое кол-во символов в имени от 2 до 40"),
    email:  yup.string().email("* Не валидная почта")
        .required("* Поле почты обязательно")
        .min(9, "* Допустимое кол-во символов в почте от 9 до 40")
        .max(40, "* Допустимое кол-во символов в почте от 9 до 40"),
    userName: yup.string()
        .required("* Поле логина обязательно")
        .min(2, "* Допустимое кол-во символов в логине от 2 до 40")
        .max(40, "* Допустимое кол-во символов в логине от 2 до 40"),
    password: yup.string()
        .required("* Поле пароля обязательно")
        .min(8, "* Минимальная длина пароля 8 символов"),
    repeatPassword: yup.string()
        .required("* Поле повторения пароля обязательно")
        .oneOf([yup.ref('password')], 'Пароли должены совпадать'),
})

export const RegisterModal: FC<RegisterModalPropsType> = ({ open, handleClose, enterRef }) => {
    const dispatch = useDispatch()
    const [notificationSuccess, setNotificationSuccess] = useState(false)
    const [notificationError, setNotificationError] = useState(false)

    const userIsLoading = useSelector(selectUserIsSuccess)

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormPropsType>({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = async (data: RegisterFormPropsType): Promise<void> => {
        dispatch(actionUser.fetchSignUp(data))
        if (userIsLoading) {
            setNotificationSuccess(true)
            setNotificationError(false)
        } else {
            setNotificationSuccess(false)
            setNotificationError(true)
        }
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <RegistrationDialogContent>
                    <form onSubmit={ handleSubmit(onSubmit)} >
                        <FormControl component={"fieldset"} fullWidth>
                            <FormGroup aria-label={"position"}>
                                <RegistrationTitle>
                                    <TwitterIcon color={"primary"} />
                                    <Button type={"submit"} variant={"contained"}>
                                        Далее
                                    </Button>
                                </RegistrationTitle>
                                <Typography component={"div"}>
                                    <DialogContentText>
                                        <Typography variant={"h6"}
                                                    fontWeight={"bold"}
                                                    color={"black"}
                                        >Создайте учётную запись</Typography>
                                    </DialogContentText>
                                    <TextField
                                        margin="dense"
                                        id="fullName"
                                        label="Имя"
                                        type="fullName"
                                        error={!!errors.fullName}
                                        helperText={`${!!errors.fullName ? errors.fullName?.message : " "}`}
                                        fullWidth
                                        variant="filled"
                                        InputLabelProps={{shrink: true}}
                                        inputRef={enterRef}
                                        {...register("fullName", { required: true })}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="email"
                                        label="E-mail"
                                        type="email"
                                        error={!!errors.email}
                                        helperText={`${!!errors.email ? errors.email?.message : " "}`}
                                        fullWidth
                                        variant="filled"
                                        InputLabelProps={{shrink: true}}
                                        {...register("email", { required: true })}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="userName"
                                        label="Логин"
                                        type="userName"
                                        error={!!errors.userName}
                                        helperText={`${!!errors.userName ? errors.userName?.message : " "}`}
                                        fullWidth
                                        variant="filled"
                                        InputLabelProps={{shrink: true}}
                                        {...register("userName", { required: true })}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="password"
                                        label="Пароль"
                                        type="password"
                                        error={!!errors.password}
                                        helperText={`${!!errors.password ? errors.password?.message : " "}`}
                                        fullWidth
                                        variant="filled"
                                        InputLabelProps={{shrink: true}}
                                        {...register("password", { required: true })}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="repeatPassword"
                                        label="Повторите пароль"
                                        type="password"
                                        error={!!errors.repeatPassword}
                                        helperText={`${!!errors.repeatPassword ? errors.repeatPassword?.message : " "}`}
                                        fullWidth
                                        variant="filled"
                                        InputLabelProps={{shrink: true}}
                                        {...register("repeatPassword", { required: true })}
                                    />
                                </Typography>
                            </FormGroup>
                        </FormControl>
                    </form>
                </RegistrationDialogContent>
            </Dialog>
            <Notification visible={notificationError} severity={"error"}>
                <> Неверный логин или пароль <Typography component={"span"} role={"img"}>☹️</Typography></>
            </Notification>
            <Notification visible={notificationSuccess} severity={"success"}>
                <> Авторизация успешна! <Typography component={"span"} role={"img"}>🤩</Typography></>
            </Notification>
        </>
    )
}

type RegisterModalPropsType = {
    open: boolean,
    handleClose: () => void,
    enterRef: RefObject<HTMLInputElement>,
}

export type RegisterFormPropsType = {
    fullName: string,
    email: string,
    userName: string,
    password: string,
    repeatPassword: string,
}