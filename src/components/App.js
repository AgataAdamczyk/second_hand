import React from 'react';
import '../App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';

import Login from './login/Login';
import SignUp from './signUp/SignUp';
import LoggedPage from './logged/LoggedPage';


const App = () => {
  return (
    < BrowserRouter >
      <div className='App'>
        < Switch >
          < Route exact path='/' component={ Home } />
          < Route exact path='/login' component={ Login } />
          < Route exact path='/signup' component={ SignUp } />
          < Route exact path='/logged' component={ LoggedPage } />
        </ Switch >
      </div>
    </ BrowserRouter >
  )
}

export default App;
