import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {SingIn} from "./pages/SingIn";
import {Home} from "./pages/Home";

const App = () => (
    <div>
        <Routes>
            <Route path={"/sing-in"} element={ <SingIn /> }/>
            <Route path={"/*"} element={ <Home /> }/>
        </Routes>
    </div>
)

export default App;
