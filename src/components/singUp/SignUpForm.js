import React, { useRef, useState } from 'react';
import { withRouter } from 'react-router';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';
// import Input from '../Input/Input';
import Button from '../buttons/Button';
import SectionTitle from '../SectionTitle';

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
            return setError('Wprowadziłeś dwa rózne hasła');
        };

        try {
            setError('');
            setLoading(true);
            await signup(nameRef.current.value ,emailRef.current.value, passwordRef.current.value);
            history.push('/login');
        } catch {
            setError('Zarejestruj się jeszcze raz');
        };
        setLoading(false);
    };

    return (
        <form onSubmit={handleSignUp} className='signup__form'>
            <SectionTitle>Zarejestruj się</SectionTitle>
                {error}
            <input type='text' ref={nameRef} placeholder='Imię' />  
            <input type='email' ref={emailRef} placeholder='Email' />
            <input type='password' ref={passwordRef} placeholder='Hasło' />
            <input type='password' ref={passwordConfirmRef}  placeholder='Powtórz hasło' />

            <div className='form__btns'>
                <Button id='signup' type='submit' disabled={loading}>Załóż konto</Button>
                <Link id='login' to='/logged'>
                    <Button>Zaloguj się</Button>
                </Link>
            </div>
        </form>
    );
};

export default withRouter(SignUpForm);