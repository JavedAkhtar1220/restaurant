import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ResetPassword from './containers/ResetPassword';
import Profile from './containers/Profile';
import Cart from './containers/Cart';
import Payment from './containers/Payment';
import Chat from './containers/Chat';
import Restaurants from './containers/Restaurants';
import Order from './containers/Order';

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
        <Route exact component={Payment} path='/payment' />
        <Route exact component={Chat} path='/chat' />
        <Route exact component={Restaurants} path='/restaurants' />
        <Route exact component={Order} path='/orders' />
      </Switch>
    </Router>
  )
}

export default App;
