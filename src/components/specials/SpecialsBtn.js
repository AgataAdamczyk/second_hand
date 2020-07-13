import React from 'react';
import { NavLink } from 'react-router-dom';

const SpecialsButton = (props) => {
    return (
        < NavLink to='/register' className='specials__btn--link'>
            <span>{props.text}</span>
        </ NavLink >
    )
}

export default SpecialsButton;