import React from 'react';
import AboutImg from './AboutImg';

import Decor from '../../images/decoration-1.svg';
import Signature from '../../images/signature.svg';

const About = () => {
    return (
        <section name='About' className='grid__container'>
            <div className='about'>
                <div className='about__info'>
                    <h3>O nas
                        <img src={ Decor } alt='decor' id='about-decoration'/>
                    </h3>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={ Signature } alt='signature' className='about__info--signature' />
                </div>
                < AboutImg />
            </div>
        </section>
    )
}

export default About;