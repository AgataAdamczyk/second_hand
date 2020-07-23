import React from 'react';
import { NavLink } from 'react-router-dom';

const LogInBtn = () => {
    return (
        <NavLink to='/login' className='link'>
            <span>Zaloguj</span>
        </NavLink>
    )
}


export default LogInBtn;