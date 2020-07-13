import React from 'react';

const Items = (props) => {
    return (
        <div id='row'>
            <h3> </h3>
            <h4>{props.items}</h4>
            <div id='line'></div>
        </div>
    )
}

export default Items;