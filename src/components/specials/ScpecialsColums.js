import React from 'react';
import PropTypes from 'prop-types';

const SpecialsColumn = ({
    image,
    specialsText,
    specialsItems,
}) => {
    return (
        <div className='specials__columns--singleCol'>
            <img src={image} alt='icon'/>
            <h2>{specialsText}</h2>
            <span id='underline'></span>
            <h3>{specialsItems}</h3>
        </div>
    )
}

SpecialsColumn.propTypes = {
    image: PropTypes.object.isRequired,
    specialsText: PropTypes.string.isRequired,
    specialsItems: PropTypes.string.isRequired,
};

export default SpecialsColumn;