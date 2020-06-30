import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <NavLink to='/signup' className='link'>
            <span>Załóż konto</span>
        </NavLink> 
    )
}


export default Register;