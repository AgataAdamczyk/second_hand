import React from 'react';
import PropTypes from 'prop-types';

const Organizations = ({ 
    name, 
    mission, 
    accepts
}) => {
    return (
        <div className='menu__items'>
            <div className='menu__items--listLeft'>
                <div id='row'>
                    <h3>{name}</h3>
                    <h4>Cel i misja: {mission}</h4>
                    <div id='line'></div>
                </div>
            </div>
            <div className='menu__items--listRight'>
                <div id='row'>
                    <h3> </h3>
                    <h4>{accepts.join(', ')}</h4>
                    <div id='line'></div>
               </div>
            </div>
        </div>
    );
};

Organizations.propTypes = {
    name: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
    accepts: PropTypes.string.isRequired,
};

export default Organizations;