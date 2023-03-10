import React, {FC} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";
import {Breakpoint} from "@mui/material";

const useStyle = makeStyles(() => ({
    loginEnter: {
        display: "flex",
        justifyContent: "center",
        height: 32
    },
}))

export const TwitterModal: FC<SingInModalPropsType> = ({ open, handleClose, title, children, maxWidth = "sm" }) => {
    const classes = useStyle()

    function BootstrapDialogTitle(props: DialogTitleProps) {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={ onClose }
                        sx={{
                            position: 'absolute',
                            left: 6,
                            top: 5,
                            color: (theme) => theme.palette.primary.main,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
                { children }
            </DialogTitle>
        )
    }

    return (
        <Dialog open={open}
                onClose={handleClose}
                maxWidth={maxWidth}
                fullWidth>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography variant={"h6"} fontWeight={"bold"}
                            className={classes.loginEnter}
                >{ title }</Typography>
            </BootstrapDialogTitle>
            { children }
        </Dialog>
    )
}

type SingInModalPropsType = {
    open: boolean,
    handleClose: () => void,
    children: React.ReactNode,
    title?: string,

    maxWidth?: false | Breakpoint | undefined
}
type DialogTitleProps = {
    id: string,
    children?: React.ReactNode,
    onClose: () => void,
}