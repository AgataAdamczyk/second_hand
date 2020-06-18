import React from 'react';

import decoration from "../../images/decoration.png";
import signature from "../../images/signature.svg";
import about from "../../images/about.jpg";

const About = () => {
    return (
        <section name="aboutUs" className="aboutUs">
            <div className="aboutUs__content">
                <p className="aboutUs__content--title">O nas</p>
                <img className="aboutUs__content--decoration decoration" src={decoration} alt="decoration"/>
                <span className="aboutUs__content--information">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores facere quae quas recusandae rerum unde. A animi dolorem eligendi facere, id inventore molestias necessitatibus nostrum nulla rerum sequi suscipit!</span>
                <img className="aboutUs__content--signature" src={signature} alt="signature"/>

            </div>
            <div className="aboutUs__image">
                <img src={about} alt="about image"/>
            </div>
        </section>
    )
}

export default About;