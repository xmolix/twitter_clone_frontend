import React, {FC, ReactNode, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navbar} from "../../components/Navbar";
import {MainContainer, TweeterActualTheme, TweetsWrapper, TwitterSearch} from "./theme";
import {selectIsTopicsLoading, selectTopics} from "../../store/ducks/topics/selectors";
import {actionTopics} from "../../store/ducks/topics/actionCreators";
import {NavLink, Route, Routes} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import {Main} from "./components/Main";
import {Tweet} from "./components/Tweet";
import {WhomRead} from "./components/WhomRead";

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
                <Grid xs={2} item marginTop={.5}>
                    <Navbar />
                </Grid>
                <Grid item xs={7}>
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
                <Grid xs={3} item marginTop={.5}>
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
                        <TweeterActualTheme component={"div"}>
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

                    <WhomRead />
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