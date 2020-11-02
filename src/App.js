import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

//Layouts Imports
import RouteWrapper from './layouts/wrapper';

//page imports
import HomePage from './pages/HomePage';
import PackagePage from './pages/PackagePage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <Router>
            <Switch>
                <RouteWrapper exact path='/' component={HomePage} />
                <RouteWrapper exact path='/about' component={AboutPage} />
                <RouteWrapper exact path='/services' component={ServicePage} />
                <RouteWrapper exact path='/packages' component={PackagePage} />
            </Switch>
        </Router>
    );
}

export default App;
