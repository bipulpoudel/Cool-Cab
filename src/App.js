import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Layouts Imports
import RouteWrapper from './layouts/wrapper';

//page imports
import HomePage from './pages/HomePage';
import PackagePage from './pages/PackagePage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={SignInPage} />
                <Route exact path='/register' component={SignUpPage} />
                <RouteWrapper exact path='/' component={HomePage} />
                <RouteWrapper exact path='/about' component={AboutPage} />
                <RouteWrapper exact path='/services' component={ServicePage} />
                <RouteWrapper exact path='/packages' component={PackagePage} />
            </Switch>
        </Router>
    );
}

export default App;
