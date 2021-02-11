import React, { useRef, useState } from 'react';
import { withRouter } from 'react-router';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Decor from '../header/Decor';
// import FormBtns from './FormBtns';

const SignUpForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSignUp = async e => {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Wprowadziłeś dwa rózne hasła')
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value) 
            history.push("/login");
        } catch {
            setError('Zarejestruj się jeszcze raz');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSignUp} className='signup__form'>
            <h3 className='signup__form--h3'>Zarejestruj się
                <Decor />
                {error}
            </h3> 
            <input type='text' ref={nameRef} placeholder='Imię' required/>  
            <input type='email' ref={emailRef} placeholder='Email' required/>
            <input type='password' ref={passwordRef} placeholder='Hasło' required/>
            <input type='password' ref={passwordConfirmRef}  placeholder='Powtórz hasło' required/>

            <div className='form__btns'>
                <button id='signup' type='submit' disabled={loading}>Załóż konto</button>
                <Link id='login' to='/logged'>
                    <button>Zaloguj się</button>
                </Link>
            </div>
        </form>
    )
};

export default withRouter(SignUpForm);