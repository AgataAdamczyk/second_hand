import React from 'react';

import Navigation from '../header/Navigation';
import LogBtns from '../header/LogBtns';
import SignUpForm from './SignUpForm';

const SignUp = () => {
    return (
        <section name='Signup' className='grid__container'>
            <div className='signup'>
                <div className='header__menu'>
                    < LogBtns />
                    < Navigation />
                </div>
                < SignUpForm />
            </div>
        </section>
    )
}

export default SignUp;