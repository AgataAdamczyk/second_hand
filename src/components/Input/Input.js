import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ 
    className,
    type, 
    ref,
    placeholder
}) => {
    return (
        <input 
            className={className}
            type={type} 
            ref={ref}
            placeholder={placeholder}
            required
        >
        </input>
    );
};

Input.propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ref: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default Input;