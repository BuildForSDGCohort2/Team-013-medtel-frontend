import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Chat from './Pages/Chat';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import Registration from './Pages/Auth/Registration'


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth/register" component={Registration} />
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/users/:userId/chat" component={Chat} />
        </Switch>
    );
}

export default Routes;