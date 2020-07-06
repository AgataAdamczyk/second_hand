import React, { Component } from 'react';

class Items extends Component {
    render() {
        return (
            <div id='row'>
                <h3> </h3>
                <h4>{this.props.items}</h4>
                <div id='line'></div>
            </div>
        )
    }
}

export default Items;