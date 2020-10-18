import React from 'react';
import {Switch, Route} from 'react-router';
import{Home, Login, SignUp, SignIn} from './templates';

const Router = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route exact path={"(/)?"} component={Home} />
                <Route exact path={"/login"} component={Login} /> 
                <Route exact path={"/signup"} component={SignUp} /> 
                <Route exact path={"/signin"} component={SignIn} /> 
            </Switch>
        </React.Fragment>
    );
};

export default Router;