import React from 'react';
import LoginBtn from './LoginBtn';
import SignUpBtn from './SignUpBtn';

const LogBtns = () => { 
    return (
        <ul className='header__menu--log'>
            <li>< LoginBtn /></li>
            <li>< SignUpBtn /></li>
        </ul>
    )
}

export default LogBtns;