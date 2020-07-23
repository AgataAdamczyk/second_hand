import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUpBtn = () => {
    return (
        <NavLink to='/signup' className='link'>
            <span>Załóż konto</span>
        </NavLink> 
    )
}


export default SignUpBtn;