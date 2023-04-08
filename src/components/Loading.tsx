import React, {FC, ReactNode} from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

export const Loading: FC<LoadingType> = (
    { color, size = 30, marginX, marginY = 4, thickness = 3.6, children }
) => {
    return (
        <Grid container justifyContent={"center"}
              mx={marginX} my={marginY}>
            <CircularProgress color={color}
                              size={size}
                              thickness={thickness}
            />
            { children && children }
        </Grid>
    )
}

type LoadingType = {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit',
    marginY?: number,
    marginX?: number,
    size?: number,
    thickness?: number,
    children?: ReactNode,
}