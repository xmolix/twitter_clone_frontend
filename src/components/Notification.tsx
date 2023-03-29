import React, {FC, ReactElement, useEffect, useState} from 'react';
import Snackbar from "@mui/material/Snackbar";
import {styled} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import {AlertColor} from "@mui/material/Alert/Alert";

const Alert = styled(MuiAlert)({
    display: "flex",
    alignItems: "center",
    borderRadius: 30,
    boxShadow: "0 2px 4px black",
    fontSize: 18,
    width: '100%',

    "& .MuiAlert-action": {
        padding: "4px 0 4px 16px"
    },

    "& svg": {
      fontSize: 20,
    }
})

type NotificationPropsType = {
    visible: boolean,
    children: React.ReactNode,
    severity: AlertColor,
    autoHideDuration?: number,

}

export const Notification: FC<NotificationPropsType> = (
    { visible, children, autoHideDuration = 10000, severity }
): ReactElement => {

    const [visibleNotification, setVisibleNotification] = useState<boolean>(false)

    useEffect(() => {
        if (visible) {
            setVisibleNotification(true)
        }
    }, [visible])

    const handleCloseNotification = () => {
        setVisibleNotification(false)
    }

    return (
        <Snackbar open={visibleNotification} autoHideDuration={autoHideDuration}
                  anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                  onClose={handleCloseNotification}>
            <Alert onClose={handleCloseNotification} severity={severity}>
                { children }
            </Alert>
        </Snackbar>
    )
}