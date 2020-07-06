import React from 'react';

import Navigation from '../header/Navigation';
import LogBtns from '../header/LogBtns';
import SignInForm from '../singIn/SignInForm';

const SignIn = () => {
    return (
        <section name='SignIn' className='grid__container'>
            <div className='signIn'>
                <div className='header__menu'>
                    < LogBtns />
                    < Navigation />
                </div>
                < SignInForm />
            </div>
        </section>
    )
}

export default SignIn;