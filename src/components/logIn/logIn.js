import React from 'react';

import Navigation from '../header/Navigation';
import LogBtns from '../header/LogBtns';
import LogInForm from './LogInForm';

const LogIn = () => {
    return (
        <section name='LogIn' className='grid__container'>
            <div className='logIn'>
                <div className='header__menu'>
                    < LogBtns />
                    < Navigation />
                </div>
                < LogInForm />
            </div>
        </section>
    )
}

export default LogIn;