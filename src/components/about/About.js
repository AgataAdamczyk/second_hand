import React from 'react';
import AboutImg from './AboutImg';

const About = () => {
    return (
        <section name='About' className='grid__container'>
            <div className='about'>
                <div className='about__info'>
                    <h3>O nas
                        <img src={require('../../images/decoration-1.svg')} alt='decoration' id='about-decoration'/>
                    </h3>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={require('../../images/signature.svg')} alt='signature' className='about__info--signature' />
                </div>
                < AboutImg />
            </div>
        </section>
    )
}

export default About;