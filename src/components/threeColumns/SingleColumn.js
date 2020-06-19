import React, { Component } from 'react';

class InfoColumn extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col-5 threeColumns__content--singleColumn">
                    <h2>{this.props.columnNumber}</h2>
                    <h3>{this.props.columnText}</h3>
                    <p>{this.props.columnDescription}</p>
                </div>
            </div>
        )
    }
}

export default InfoColumn;