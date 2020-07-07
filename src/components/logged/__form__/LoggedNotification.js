import React, { Component } from 'react';

class LoggedNotification extends Component {
    render() {
        return (
            <div className='logged__form--notification'>
                <h2>Ważne!</h2>
                <h3>{this.props.text}</h3>
            </div>
        )
    }
}

export default LoggedNotification;