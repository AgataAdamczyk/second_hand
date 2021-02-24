import React from 'react';
import '../App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import LogIn from './logIn/LogIn';
import SignUp from './singUp/singUp';
import LoggedPage from './logged/LoggedPage';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router >
        <div className='App'>
          <Switch >
            <Route exact path='/' component={ Home } />
            <Route exact path='/login' component={ LogIn } />
            <Route exact path='/signup' component={ SignUp } />
            <PrivateRoute exact path='/logged' component={ LoggedPage } />
          </Switch >
        </div>
      </Router >
    </AuthProvider>
  );
};

export default App;
