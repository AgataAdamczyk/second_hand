import React, { useRef, useState } from 'react';
import { withRouter } from 'react-router';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Decor from '../header/Decor';
// import FormBtns from '../signUp/FormBtns';

const LogInForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleLogIn = async e => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value) 
            history.push("/logged");
        } catch {
            setError('Nieprawidłowe logowanie');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleLogIn} className='login__form'>
            <h3 className='login__form--h3'>Zaloguj się
                <Decor />
                {error}
            </h3>   
            <input type='email' ref={emailRef} placeholder='Email' required/>
            <input type='password' ref={passwordRef} placeholder='Hasło' required/>

            <div className='form__btns'>
                <Link id='signup' to='/signup'>
                    <button>Załóż konto</button>
                </Link>
                <button id='login' type='submit' disabled={loading}>Zaloguj się</button>
            </div>
        </form>
    )
};

export default withRouter(LogInForm);