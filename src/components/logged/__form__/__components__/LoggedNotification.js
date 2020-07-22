import React from 'react';
import PropTypes from 'prop-types';

const LoggedNotification = ({ text }) => {
    return (
        <div className='logged__form--notification'>
            <h2>Ważne!</h2>
            <h3>{text}</h3>
        </div>
    )
}

LoggedNotification.propTypes = {
    text: PropTypes.string.isRequired,
};

export default LoggedNotification;