import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = ({
    name,
    label,
    checked = false,
    onChange
}) => (
    <>
        <label htmlFor={name}>{label}</label>
        <input
            type='text'
            name={name}
            checked={checked}
            onChange={onChange} 
        />
    </>
);

SingleInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

export default SingleInput;