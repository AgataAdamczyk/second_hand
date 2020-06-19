import React, { Component } from 'react';

class Items extends Component {
    render() {
        return (
            <>
                <h3>{this.props.items}</h3>
                <div className='line'></div>
            </>
        )
    }
}

export default Items;