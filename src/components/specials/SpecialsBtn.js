import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SpecialsButton = ({ text }) => {
    return (
        < NavLink to='/signup' className='specials__btn--link'>
            <span>{text}</span>
        </ NavLink >
    )
}

SpecialsButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default SpecialsButton;