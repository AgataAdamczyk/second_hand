import React from 'react';
import PropTypes from 'prop-types';

const SpecialsColumn = ({
    image,
    specialsText,
    specialsItems,
}) => {
    return (
        <div className='specials__column'>
            <img className='specials__column--img' src={image} alt='column icon'/>
            <h2 className='specials__column--header'>{specialsText}</h2>
            <span className='specials__column--underline'></span>
            <h3 className='specials__column--info'>{specialsItems}</h3>
        </div>
    );
};

SpecialsColumn.propTypes = {
    image: PropTypes.object.isRequired,
    specialsText: PropTypes.string.isRequired,
    specialsItems: PropTypes.string.isRequired,
};

export default SpecialsColumn;