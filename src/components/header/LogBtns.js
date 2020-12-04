import React from 'react';
import LogInBtn from './LogInBtn';
import SignUpBtn from './SignUpBtn';

const LogBtns = () => { 
    return (
        <ul className='header__menu--log'>
            <li>< LogInBtn /></li>
            <li>< SignUpBtn /></li>
        </ul>
    )
};

export default LogBtns;