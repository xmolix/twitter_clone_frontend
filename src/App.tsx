import React, {useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom';
import {SingIn} from "./pages/SingIn";
import {Home} from "./pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {actionUser} from "./store/ducks/user/actionCreators";
import {selectUserIsAuth, selectUserIsLoaded} from "./store/ducks/user/selectors";
import {LoadingStatusEnum} from "./store/storeTypes";
import { Loading } from './components/Loading';
import TwitterIcon from "@mui/icons-material/Twitter";

const App = () => {
    const dispatch = useDispatch()

    const isAuth = useSelector(selectUserIsAuth)
    const isLoaded = useSelector(selectUserIsLoaded)
    const isReady = isLoaded !== !!LoadingStatusEnum.NEVER || isLoaded !== !!LoadingStatusEnum.LOADING

    const redirect = useNavigate()

    useEffect(() => {
        if (isAuth && isReady) {
            redirect("/")
        }
    }, [isAuth, isReady, redirect])

    useEffect(() => {
        dispatch(actionUser.fetchUserData())
    }, [dispatch])

    if (!isAuth) {
        return <Loading color={"primary"} size={90} marginY={50} thickness={2}>
            <TwitterIcon color={"primary"} sx={{ position: "absolute", fontSize: 50, marginTop: 2.5 }} />
        </Loading>
    }

    return (
        <div>
            <Routes>
                <Route path={"/sing-in"} element={ <SingIn /> }/>
                <Route path={"/*"} element={ <Home /> }/>
            </Routes>
        </div>
    )
}

export default App;
