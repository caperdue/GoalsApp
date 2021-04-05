import './App.css';
import Navigation from './Navigation.js'
import { Route, Switch } from 'react-router-dom';
import MyGoals from './MyGoals.js'
import SignIn from './SignIn.js'


function App() {
  return (
    <>
      <Navigation></Navigation>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/' component={MyGoals} />
      </Switch>
    </>
  );
}

export default App;
