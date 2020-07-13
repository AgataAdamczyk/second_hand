import React from 'react';

const SingleColumn = (props) => {
    return (
        <div className='threeColumns__singleCol'>
            <span className='threeColumns__singleCol--number'>{props.columnNumber}</span>
            <span className='threeColumns__singleCol--title'>{props.columnTitle}</span>
            <span className='threeColumns__singleCol--description'>{props.columnDescription}</span>
        </div>
    )
}

export default SingleColumn;