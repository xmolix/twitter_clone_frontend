import React, {FC} from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

export const Loading: FC<LoadingType> = ({ color, size = 30, marginX, marginY = 4 }) => {
    return (
        <Grid container justifyContent={"center"}
              mx={marginX} my={marginY}>
            <CircularProgress color={color} size={size} />
        </Grid>
    )
}

type LoadingType = {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit',
    marginY?: number,
    marginX?: number,
    size?: number,
}