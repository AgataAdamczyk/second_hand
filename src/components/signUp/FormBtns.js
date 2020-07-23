import React from 'react';
import { Link } from 'react-router-dom';

const FormBtns = () => {
    return (
        <div className='form__btns'>
            <Link id='signup' to='/signup'>
                <button type='submit'>Załóż konto</button>
            </Link>
            <Link id='login' to='/logged'>
                <button type='submit'>Zaloguj się</button>
            </Link>
        </div>
    )
}


export default FormBtns;