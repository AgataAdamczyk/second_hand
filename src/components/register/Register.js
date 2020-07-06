import React from 'react';

import Navigation from '../header/Navigation';
import LogBtns from '../header/LogBtns';
import RegisterForm from './RegisterForm';

const Register = () => {
    return (
        <section name='Register' className='grid__container'>
            <div className='register'>
                <div className='header__menu'>
                    < LogBtns />
                    < Navigation />
                </div>
                < RegisterForm />
            </div>
        </section>
    )
}

export default Register;