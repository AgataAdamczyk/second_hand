import React from 'react';
import ButtonLink from '../buttons/ButtonLink';

const AuthBtns = () => { 
    return (
        <ul className='authorization'>
            <li><ButtonLink pathName='/login' text='Zaloguj' /></li>
            <li><ButtonLink pathName='/signup' text='Załóż konto' /></li>
        </ul>
    );
};

export default AuthBtns;