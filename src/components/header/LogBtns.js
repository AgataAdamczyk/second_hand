import React from 'react';
import LogInBtn from './LogInBtn';
import RegisterBtn from './RegisterBtn';


const LogBtns = () => { 
    return (
        <ul className='header__menu--log'>
            <li>< LogInBtn /></li>
            <li>< RegisterBtn /></li>
        </ul>
    )
}

export default LogBtns;