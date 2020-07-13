import React from 'react';

const Rectangle = (props) => {
    return (
        <div className='rectangle'>
            <p>{props.number}</p>
            <p id='rect-text'>{props.text}</p>
        </div>
    )
}

export default Rectangle;