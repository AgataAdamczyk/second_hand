import React from 'react';
import AuthBtns from '../header/AuthBtns';
import HeaderMenu from '../header/HeaderMenu';
import SignUpForm from './SignUpForm';

const SignUp = () => {
    return (
        <section name='Signup' className='container'>
            <nav className='navigation'>
                <AuthBtns />
                <HeaderMenu />
            </nav> 
            <div className='signup'>
                <SignUpForm />
            </div>
        </section>
    );
};

export default SignUp;