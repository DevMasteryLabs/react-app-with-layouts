import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import CustomRoute from './routes/CustomRoute';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PublicRoute path='/login' component={Login} />
          <PublicRoute path='/register' component={Register} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/profile' component={Profile} />
          <CustomRoute path='/' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
