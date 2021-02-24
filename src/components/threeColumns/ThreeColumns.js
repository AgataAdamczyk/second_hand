import React from 'react';
import { threeColumns } from '../../data/threeColumns';
import SingleColumn from './SingleColumn';

const ThreeColumns = () => {
    return (
        <section className='container' name='ThreeColumns'>
            <div className='threeColumns'>
                {threeColumns.map(item => (
                    <SingleColumn key={item.columnNumber} {...item} />
                ))}
            </div>
        </section>
    );
};

export default ThreeColumns;