import React from 'react';
import PropTypes from 'prop-types';

const Rectangle = ({ 
    number, 
    text 
}) => {
    return (
        <div className='rectangle'>
            <p className='rectangle__number'>{ number }</p>
            <p className='rectangle__text'>{ text }</p>
        </div>
    );
};

Rectangle.protoTypes = {
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
}

export default Rectangle;