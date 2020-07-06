import React from 'react';
import '../App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';

// import LoggedPage from './LoggedPage'
import LogIn from './logIn/logIn';
import Register from './register/Register';


const App = () => {
  return (
    < BrowserRouter >
      <div className='App'>
        < Switch >
          < Route exact path='/' component={ Home } />
          < Route path='/logIn' component={ LogIn } />
          < Route path='/register' component={ Register } />
            {/* <Route path='/logged/' component={LoggedPage} /> */}
        </ Switch >
      </div>
    </ BrowserRouter >
  )
}

export default App;
