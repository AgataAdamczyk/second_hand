import React from 'react';

const SpecialsColumn = (props) => {
    return (
        <div className='specials__columns--singleCol'>
            <img src={props.image} alt='icon'/>
            <h2>{props.specialsText}</h2>
            <span id='underline'></span>
            <h3>{props.specialsItems}</h3>
        </div>
    )
}

export default SpecialsColumn;