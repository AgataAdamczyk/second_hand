import React from 'react';

import Navigation from '../header/Navigation';
import LogBtns from '../header/LogBtns';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <section name='Login' className='grid__container'>
            <div className='login'>
                <div className='header__menu'>
                    < LogBtns />
                    < Navigation />
                </div>
                < LoginForm />
            </div>
        </section>
    )
}

export default Login;