import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Chat from './Pages/Chat';
import Home from './Pages/Home';


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:userId/chat" component={Chat} />
        </Switch>
    );
}

export default Routes;