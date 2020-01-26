import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import GitProfile from '../containers/GitProfile';


const AppRoutes = () => (
    <Router>
        <Switch>
            <Route path='/' component={GitProfile} exact/>
        </Switch>
    </Router>
);

export default AppRoutes;
