import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = ({
    name,
    label,
    values,
    placeholder,
    onChange
}) => (
    <>
        <label htmlFor={name}>{label}</label>
        <input
            type='text'
            name={name}
            values={values}
            placeholder={placeholder}
            onChange={onChange} 
        />
    </>
);

SingleInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    values: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SingleInput;