import React from 'react';

const LoggedNotification = (props) => {
    return (
        <div className='logged__form--notification'>
            <h2>Ważne!</h2>
            <h3>{props.text}</h3>
        </div>
    )
}

export default LoggedNotification;