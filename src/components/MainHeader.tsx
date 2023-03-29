import React, {FC} from 'react';
import {classTweetHeader, TweetHeader} from "../pages/Home/theme";
import Typography from "@mui/material/Typography";
import BackIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import IconButton from "@mui/material/IconButton";
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

export const MainHeader: FC<MainHeaderPropsType> = ({ title, backArrow }) => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }

    return (
        <TweetHeader sx={classTweetHeader} variant={"outlined"}>
            <Typography variant={"h6"}>
                { !backArrow
                    ? title
                    : <>
                        <Grid container>
                            <Grid xs={1} item>
                                <IconButton onClick={goBack}>
                                    <BackIcon />
                                </IconButton>
                            </Grid>
                            <Grid xs={11} item>
                                { title }
                            </Grid>
                        </Grid>
                    </> }
            </Typography>
        </TweetHeader>
    )
}

type MainHeaderPropsType = {
    title: string,
    backArrow?: boolean,
}