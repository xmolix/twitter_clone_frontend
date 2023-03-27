import React, {FC, ReactElement, RefObject} from 'react';
import {TwitterModal} from "../../../components/Modals/TwitterModal";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Notification} from "../../../components/Notification";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {actionUser} from "../../../store/ducks/user/actionCreators";
import {selectUserStatus} from "../../../store/ducks/user/selectors";
import {LoadingStatusEnum} from "../../../store/storeTypes";

const validationSchema = yup.object().shape({
    email: yup.string().email("* Не валидная почта")
        .required("* Поле почты обязательно")
        .min(9, "* Допустимое кол-во символов в почте от 9 до 40")
        .max(40, "* Допустимое кол-во символов в почте от 9 до 40"),
    password: yup.string()
        .required("* Поле пароля обязательно")
        .min(8, "* Минимальная длина пароля 8 символов"),
})

// let notificationError: Error | unknown
// let notificationSuccess: boolean | unknown

export const LoginModal: FC<LoginModalPropsType> = ({ open, handleClose, enterRef }): ReactElement => {
    const dispatch = useDispatch()

    const userState = useSelector(selectUserStatus)

    const { register, handleSubmit, formState: { errors, isSubmitting  } } = useForm<LoginFormPropsType>({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = async (data: LoginFormPropsType): Promise<void> => {
        dispatch(actionUser.fetchUserData(data))
        if (userState === LoadingStatusEnum.SUCCESS) {
            handleClose()
        }
    }


    return (
        <>
            <TwitterModal open={open}
                          handleClose={handleClose}
                          title={"Войти в Твиттер"}>
                <DialogContent style={{ padding: "0 15px 8px" }}>
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <FormControl component={"fieldset"} fullWidth>
                            <FormGroup aria-label={"position"} row>
                                <TextField
                                    id="email"
                                    type="email"
                                    sx={{mt: 2.5}}
                                    fullWidth
                                    variant="filled"
                                    label={"E-mail"}
                                    error={!!errors.email}
                                    helperText={`${!!errors.email ? errors.email?.message : " "}`}
                                    inputRef={enterRef}
                                    InputLabelProps={{ shrink: true }}
                                    {...register("email", { required: true })}
                                />
                                <TextField
                                    id="password"
                                    type="password"
                                    margin="dense"
                                    fullWidth
                                    variant="filled"
                                    label={"Пароль"}
                                    error={!!errors.password}
                                    helperText={`${!!errors.password ? errors.password?.message : " "}`}
                                    InputLabelProps={{ shrink: true }}
                                    {...register("password", { required: true })}
                                />
                                <Button type={"submit"}
                                        variant={"contained"}
                                        style={{ margin: "0 0 8px" }}
                                        fullWidth
                                >Войти
                                </Button>
                            </FormGroup>
                        </FormControl>

                    </form>
                </DialogContent>
            </TwitterModal>
            <Notification visible={!isSubmitting && userState === LoadingStatusEnum.ERROR} severity={"error"}>
                <> Неверный логин или пароль <Typography component={"span"} role={"img"}>☹️</Typography></>
            </Notification>
            <Notification visible={!isSubmitting && userState === LoadingStatusEnum.SUCCESS} severity={"success"}>
                <> Авторизация успешна! <Typography component={"span"} role={"img"}>🤩</Typography></>
            </Notification>
        </>
    )
}

type LoginModalPropsType = {
    open: boolean,
    handleClose: () => void,
    enterRef: RefObject<HTMLInputElement>,
}

export type LoginFormPropsType = {
    email: string,
    password: string,
}