import React from 'react';
import {Switch, Route} from 'react-router';
import{Home, Login} from './templates';

const Router = () => {
    return(
        <React.Fragment>
            <Switch>
            <Route exact path={"(/)?"} component={Home} />
                <Route exact path={"/login"} component={Login} /> 
            </Switch>
        </React.Fragment>
    );
};

export default Router;