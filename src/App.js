import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ResetPassword from './containers/ResetPassword';
import Profile from './containers/Profile';
import Cart from './containers/Cart';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path='/' />
        <Route exact component={Login} path='/login' />
        <Route exact component={Signup} path='/signup' />
        <Route exact component={ResetPassword} path='/resetpassword' />
        <Route exact component={Profile} path='/profile' />
        <Route exact component={Cart} path='/cart' />
      </Switch>
    </Router>
  )
}

export default App;
