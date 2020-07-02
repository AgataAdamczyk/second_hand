import React, { Component } from 'react';

class Organization extends Component {
    render() {
        return (
            <div id='row'>
                <h3>{this.props.title}</h3>
                <h4>Cel i misja: {this.props.description}</h4>
                <div id='line'></div>
            </div>
        )
    }
}

export default Organization;