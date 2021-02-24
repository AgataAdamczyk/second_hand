import React from 'react';
import DecorImg from '../images/decoration-1.svg';

const SectionTitle = ({
    children
}) => {
    return (
        <> 
            <h2 className='section__title'>{ children }</h2>
            <img className='section__title--decor' src={ DecorImg } alt='decor' /> 
        </>
    );
};

export default SectionTitle;