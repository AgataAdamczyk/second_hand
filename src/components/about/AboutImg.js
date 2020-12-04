import React from 'react';
import Background from '../../images/about.jpg';

const AboutImg = () => {

    return (
        <div className='about__img'>
            <img src={ Background } alt='about'/>
        </div>
    )
}

export default AboutImg;