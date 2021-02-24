import React, { useRef, useState } from 'react';
import { withRouter } from 'react-router';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
// import Input from '../Input/Input';
import Button from '../buttons/Button';

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
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/logged");
        } catch {
            setError('Nieprawidłowe logowanie');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleLogIn} className='login__form'>
            <SectionTitle>Zaloguj się</SectionTitle>
                {error} 
            <input type='email' ref={emailRef} placeholder='Email' />
            <input type='password' ref={passwordRef} placeholder='Hasło' />

            <div className='form__btns'>
                <Link id='signup' to='/signup'>
                    <Button>Załóż konto</Button>
                </Link>
                <Button id='login' type='submit' disabled={loading}>Zaloguj się</Button>
            </div>
        </form>
    );
};

export default withRouter(LogInForm);