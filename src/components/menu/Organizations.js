import React from 'react';

const Organization = (props) => {
    return (
        <div id='row'>
            <h3>{props.title}</h3>
            <h4>Cel i misja: {props.description}</h4>
            <div id='line'></div>
        </div>
    )
}

export default Organization;