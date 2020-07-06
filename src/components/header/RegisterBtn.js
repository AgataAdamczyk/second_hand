import React from 'react';
import { NavLink } from 'react-router-dom';

const RegisterBtn = () => {
    return (
        <NavLink to='/register' className='link'>
            <span>Załóż konto</span>
        </NavLink> 
    )
}


export default RegisterBtn;