import React from 'react';
import {Switch, Route} from 'react-router';
import{SignUp, SignIn, Reset, Home} from './templates';
import Auth from './Auth';

const Router = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route exact path={"/signup"} component={SignUp} /> 
                <Route exact path={"/signin"} component={SignIn} /> 
                <Route exact path={"/signin/reset"} component={Reset} /> 
                <Auth>
                    <Route exact path={"(/)?"} component={Home} />
                </Auth>
            </Switch>
        </React.Fragment>
    );
};

export default Router;