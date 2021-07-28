import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HeaderComp } from './Components/Header/Header';
import { HomeComp } from './Components/Home';
import { SignUpPage } from './Components/Registration';
import { SignInPage } from './Components/Registration';

function App() {
  const [signUpAction, setSignUpAction] = useState(false);

  // const openSignUp = () => {
  //   setSignUpAction(true);
  // };
  // const closeSignUp = () => {
  //   setSignUpAction(false);
  // };
  return (
    <Router>
      <Switch>
        <main className="App">
          <HeaderComp />
          <Route exact path="/">
            <HomeComp />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
        </main>
      </Switch>
    </Router>
  );
}

export default App;
