import React, { Component } from 'react';

class SpecialsColumn extends Component {
    render() {
        return (
            <div className="col-2 specials__columns--singleCol">
                <img src={this.props.image} alt="hands"/>
                <h2>{this.props.specialsText}</h2>
                <div className="underline"></div>
                <h2>{this.props.specialsItems}</h2>
            </div>
        )
    }
}

export default SpecialsColumn;