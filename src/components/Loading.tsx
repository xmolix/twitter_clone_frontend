import React, {FC} from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

export const Loading: FC<LoadingType> = ({ size = 30, marginY = 4 }) => {
    return (
        <Grid container justifyContent={"center"} my={marginY}>
            <CircularProgress size={size} />
        </Grid>
    )
}

type LoadingType = {
    marginY?: number,
    size?: number,
}