import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const HeaderBtns = ({ text }) => {
    return (
        <NavLink to='/login' className='link'>
            <span>{text}</span>
        </NavLink>
    )
}

HeaderBtns.propTypes = {
    text: PropTypes.string.isRequired,
};

export default HeaderBtns;