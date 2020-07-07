import React, { Component } from 'react';

class Rectangle extends Component {
    render() {
        return (
            <div className='rectangle'>
                <p>{this.props.number}</p>
                <p id='rect-text'>{this.props.text}</p>
            </div>
        )
    }
}

export default Rectangle;