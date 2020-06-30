import React from 'react';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
    return (
        <NavLink to='/signin' className='link'>
            <span>Zaloguj</span>
        </NavLink>
    )
}


export default LogIn;