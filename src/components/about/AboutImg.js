import React, {Component} from 'react';

class AboutImg extends Component {
    render() {
        return (
            <div className='about__img'>
                <img src={require('../../images/about_image.svg')} alt="about_img"/>
            </div>
        )
    }
}

export default AboutImg;