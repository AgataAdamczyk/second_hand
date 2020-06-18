import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class LogIn extends Component {
    render() {
        return (
        <NavLink to='/signin' className='link'>
            <span>Logowanie</span>
        </NavLink>
        )
    }
}


export default LogIn;