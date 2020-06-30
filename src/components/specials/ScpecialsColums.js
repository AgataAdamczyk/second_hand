import React, { Component } from 'react';

class SpecialsColumn extends Component {
    render() {
        return (
            <div className='specials__columns--singleCol'>
                <img src={this.props.image} alt='icon'/>
                <h2>{this.props.specialsText}</h2>
                <span id='underline'></span>
                <h3>{this.props.specialsItems}</h3>
            </div>
        )
    }
}

export default SpecialsColumn;