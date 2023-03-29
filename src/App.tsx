import React, {useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom';
import {SingIn} from "./pages/SingIn";
import {Home} from "./pages/Home";
import {AuthAPI} from "./services/api/authAPI";
import {useDispatch, useSelector} from "react-redux";
import {actionUser} from "./store/ducks/user/actionCreators";
import {selectIsAuth} from "./store/ducks/user/selectors";

const App = () => {
    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth)

    const redirect = useNavigate()

    useEffect(() => {
        if (isAuth) {
            redirect("/")
        }
    }, [isAuth, redirect])

    const checkAuth = async () => {
        try {
            const { data } = await AuthAPI.getMe()
            dispatch(actionUser.setUserData(data))
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        checkAuth()
    }, [])

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
