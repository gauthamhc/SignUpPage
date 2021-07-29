import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HeaderComp } from './Components/Header/HeaderComp';
import { HomeComp } from './Components/Home';
import { SignUpPage, SignInPage } from './Components/Registration';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComp />
        <Switch>
          <Route exact path="/">
            <HomeComp />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
