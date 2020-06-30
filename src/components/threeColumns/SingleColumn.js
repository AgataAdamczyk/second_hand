import React, { Component } from 'react';

class SingleColumn extends Component {
    render() {
        return (
            <div className='three__columns--singleCol'>
                <h2>{this.props.columnNumber}</h2>
                <h3>{this.props.columnText}</h3>
                <p>{this.props.columnDescription}</p>
            </div>
        )
    }
}

export default SingleColumn;