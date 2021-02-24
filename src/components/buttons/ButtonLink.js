import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonLink = ({ 
    text, 
    pathName 
}) => {
    return (
        <Link to={`${pathName}`} className='link'>
            <span>{text}</span>
        </Link>
    );
};

ButtonLink.propTypes = {
    text: PropTypes.string.isRequired,
    pathName: PropTypes.string.isRequired
};

export default ButtonLink;