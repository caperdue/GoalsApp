import './App.css';
import Navigation from './Navigation.js';
import { Route, Switch } from 'react-router-dom';
import MyGoals from './MyGoals.js';
import SignIn from './SignIn.js';
import { AppContext } from "../index.js";
import { useState } from 'react';

function App() {
  //Allow to store the user session. Anything wrapped in AppContext.Provider allows us to access
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  
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
