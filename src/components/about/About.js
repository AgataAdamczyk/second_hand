import React, { Component } from 'react';
import AboutImg from './AboutImg';

class About extends Component {
    render() {
        return (
            <section name='About' className="grid__container" id='about'>
                <div className="row">
                    <div className="col-21 about__content">
                        <div className="col-10 about__leftSide">
                            <div className="col-7 about__leftSide--box">
                                <h3>O nas</h3>
                                <img src={require('../../images/decoration-1.svg')} alt="decoration" className='about__leftSide--decoration'/>
                                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                                <img src={require('../../images/signature.svg')} alt="signature" className='about__leftSide--signature' />
                            </div>
                        </div>
                        <div className="col-11">
                            < AboutImg />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;