import React, {useEffect} from 'react'
import {Route, Routes} from 'react-router-dom';
import {SingIn} from "./pages/SingIn";
import {Home} from "./pages/Home";
import {AuthAPI} from "./services/api/authAPI";
import {useDispatch} from "react-redux";
import {actionUser} from "./store/ducks/user/actionCreators";

const App = () => {
    const dispatch = useDispatch()
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
