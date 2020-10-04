import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import './assets/scss/App.scss';
import LandingPageComponent from './components/landing-page-component';
function App() {
  return (  
        <Router>
        <Switch>
          <Route exact  path="/" component={LandingPageComponent} />
          <Redirect to="/" />
        </Switch>
        </Router>
  );
}

export default App;
