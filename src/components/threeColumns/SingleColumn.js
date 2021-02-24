import React from 'react';
import PropTypes from 'prop-types';

const SingleColumn = ({
    columnNumber,
    columnTitle,
    columnDescription,
}) => {
    return (
        <div className='threeColumns__singleCol'>
            <span className='threeColumns__singleCol--number'>{columnNumber}</span>
            <span className='threeColumns__singleCol--title'>{columnTitle}</span>
            <span className='threeColumns__singleCol--description'>{columnDescription}</span>
        </div>
    );
};

SingleColumn.propTypes = {
    columnNumber: PropTypes.number.isRequired,
    columnTitle: PropTypes.string.isRequired,
    columnDescription: PropTypes.string.isRequired,
};

export default SingleColumn;