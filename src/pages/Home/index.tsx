import React, {FC, ReactNode, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navbar} from "../../components/Navbar";
import {MainContainer, TweeterActualTheme, TweetsWrapper, TwitterSearch} from "./theme";
import {selectIsTopicsLoading, selectTopics} from "../../store/ducks/topics/selectors";
import {actionTopics} from "../../store/ducks/topics/actionCreators";
import {NavLink, Route, Routes} from "react-router-dom";

import AddPersonIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';

import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import {Main} from "./components/Main";
import {Tweet} from "./components/Tweet";

export const Home: FC = () => {
    const dispatch = useDispatch()

    const topics= useSelector(selectTopics)
    const isLoadingTopics = useSelector(selectIsTopicsLoading)

    useEffect(() => {
        dispatch(actionTopics.fetchTopics())
    }, [dispatch])

    const renderMultiRoutes = ({ element: Element, paths, ...rest }: MultiRoutesType) =>
        paths.map(path => <Route key={path} path={path} {...rest} element={Element} />)

    return (
        <MainContainer maxWidth={false}>
            <Grid container>
                <Grid xs={2} marginTop={.5}>
                    <Navbar />
                </Grid>
                <Grid xs={7}>
                    <TweetsWrapper variant={"outlined"} >
                        <Routes>
                            { renderMultiRoutes({
                                paths: ["/", "/home"],
                                element: <Main />
                            }) }
                            <Route path={"/home/tweet/:tweetID"} element={ <Tweet /> } />
                        </Routes>
                    </TweetsWrapper>
                </Grid>
                <Grid xs={3} marginTop={.5}>
                    <Stack position={"sticky"} top={4} ml={1}>
                    <TwitterSearch variant={"outlined"}
                                   placeholder={"Поиск в Твиттере"}
                                   fullWidth
                                   InputProps={{
                                       startAdornment: (
                                           <InputAdornment position={"start"}>
                                               <SearchIcon />
                                           </InputAdornment>
                                       )}}
                    />
                        {!isLoadingTopics && <>
                            <TweeterActualTheme>
                                <Typography component={"div"}>
                                    Актуальные темы
                                </Typography>
                                <Divider component={"hr"} />
                                <List>
                                    {topics.map(t =>
                                        <React.Fragment key={t._id}>
                                            <NavLink to={`/home/search?q=${t.name}`}>
                                                <ListItem>
                                                    <ListItemText primary={t.name}
                                                                  secondary={
                                                                      <Typography component={"span"} variant={"body2"}>
                                                                          Твитов: {t.count}
                                                                      </Typography>
                                                                  }
                                                    />
                                                </ListItem>
                                            </NavLink>
                                            <Divider component={"hr"} />
                                        </React.Fragment>
                                    )}
                                </List>
                            </TweeterActualTheme>
                        </>}

                    <TweeterActualTheme>
                        <Typography component={"div"}>
                            Кого читать
                        </Typography>
                        <Divider component={"hr"} />
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt={"Someone"}
                                            src={"https://avatars.steamstatic.com/195bb3c555c5e18ba6e83f84316db941e6912825_full.jpg"}
                                    />
                                </ListItemAvatar>
                                <ListItemText primary={"The art of communication"}
                                              secondary={
                                                <Typography component={"span"} variant={"body2"}>
                                                    @TheArtOfCommunication
                                                </Typography>
                                              }
                                />
                                <IconButton>
                                    <AddPersonIcon />
                                </IconButton>
                            </ListItem>
                            <Divider component={"hr"} />
                        </List>
                    </TweeterActualTheme>
                    </Stack>
                </Grid>
            </Grid>
        </MainContainer>
    )
}

type MultiRoutesType = {
    paths: string[],
    element: ReactNode,
    rest?: any,
}