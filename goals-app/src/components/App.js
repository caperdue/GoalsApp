import './App.css';
import Navigation from './Navigation.js';
import { Link, Route, Switch } from 'react-router-dom';
import MyGoals from './MyGoals.js';
import SignIn from './SignIn.js';
import { AppContext } from "../index.js";
import { useState, useEffect } from 'react';
import { Auth } from "aws-amplify";

function App() {
  //Allow to store the user session. Anything wrapped in AppContext.Provider allows us to access
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  //Whenever component mounts, call onLoad() to look for current session and if true make sure user authentication.
  useEffect(() => {
    onLoad();
  }, []);
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsAuthenticating(false);
  }

  return (
    <>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Navigation></Navigation>
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/goals' component={MyGoals} />
        </Switch>
      </AppContext.Provider>
    </>
  );
}

export default App;
