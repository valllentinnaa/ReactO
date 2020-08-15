import React, {useContext} from 'react'
import UserContext from './Context'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Articles from './pages/articles/'
import AddArticle from './pages/articles/add'
import Register from './pages/Register'
import ErrorPage from './pages/error'
import LoginDashboard from "./pages/login-dashboard/LoginDashboard";
import DemoDashboard from "./pages/demo-dashboard/DemoDashboard";
import Login from "./pages/Login";
import PricePlans from "./pages/PricePlans";
import Profile from "./pages/Profile";
import EditArticle from "./pages/articles/edit";

const Navigation = () => {
    const context = useContext(UserContext);
    const loggedIn = context.user && context.user.loggedIn;

    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard" exact>
                {loggedIn ? (<LoginDashboard/>) : (<DemoDashboard/>)}
            </Route>
            <Route path="/articles/new">
                {loggedIn ? (<AddArticle/>) : (<Redirect to="/login"/>)}
            </Route>
            <Route path="/articles" exact>
                {loggedIn ? (<Articles/>) : (<Redirect to="/login"/>)}
            </Route>
            <Route path="/articles/new">
                {loggedIn ? (<AddArticle/>) : (<Redirect to="/login"/>)}
            </Route>
            <Route path="/plans" exact component={PricePlans}/>
            <Route path="/register">
                {loggedIn ? (<Redirect to="/"/>) : (<Register/>)}
            </Route>
            <Route path="/login">
                {loggedIn ? (<Redirect to="/"/>) : (<Login/>)}
            </Route>
            <Route path="/profile/:userid">
                {loggedIn ? (<Profile/>) : (<Redirect to="/login"/>)}
            </Route>
            <Route path="/articles/:articleId">
                {loggedIn ? (<EditArticle/>) : (<Redirect to="/login"/>)}
            </Route>
            <Route component={ErrorPage}/>
        </Switch>
    )
};

export default Navigation;