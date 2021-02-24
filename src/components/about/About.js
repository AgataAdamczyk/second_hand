import React from 'react';
import Signature from '../../images/signature.svg';
import SectionTitle from '../SectionTitle';

const About = () => {
    return (
        <section name='About' className='container'>
            <div className='about'>
                <div className='about__info'>
                    <SectionTitle>O nas</SectionTitle>
                    <p className='about__info--paragraph'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={ Signature } alt='signature' className='about__info--signature' />
                </div>
                <div className='about__img' />
            </div>
            
        </section>
    );
};

export default About;