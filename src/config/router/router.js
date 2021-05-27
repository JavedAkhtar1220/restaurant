import React from "react";
import { Switch, Route, } from "react-router-dom";
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact component={Home} path='/' />
            <Route exact component={Login} path='/login' />
            <Route exact component={Signup} path='/signup' />
        </Switch>
    )
}

export default AppRouter;