import React from 'react';
import {BrowserRouter as Router , Switch } from 'react-router-dom';

//Layouts Imports
import RouteWrapper from './layouts/wrapper';
import AboutPage from './pages/AboutPage';

//page imports
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <RouteWrapper exact path="/" component={HomePage}/>
        <RouteWrapper exact path="/about" component={AboutPage}/>
      </Switch>
    </Router>
  );
}

export default App;
