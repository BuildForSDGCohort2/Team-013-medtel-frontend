import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Chat from './Pages/Chat';
import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';
import Login from './Pages/Auth/Login';
import Registration from './Pages/Auth/Registration'
import NotFound from "./Pages/NotFound"
import AuthRoute from './utils/AuthRoute';
import DoctorSignUp from './Pages/Auth/DoctorSignUp';
import DoctorList from './Pages/Doctors/DoctorList';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth/doctor/register" component={DoctorSignUp} />
            <Route exact path="/auth/register" component={Registration} />
            <Route exact path="/auth/login" component={Login} />
            <AuthRoute exact path="/users/:userId/chat" component={Chat} />
            <AuthRoute exact path="/users/:id/profile" component={UserProfile} />
            <Route exact path="/doctor/search" component={DoctorList} />
            <Route path="*" component={NotFound}/>
        </Switch>
    );
}

export default Routes;