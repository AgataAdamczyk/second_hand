import React from 'react';

import decoration from "../../images/decoration.png";
import first from "../../images/28.svg";
import second from "../../images/016.svg";
import third from "../../images/039.svg";
import fourth from "../../images/58.svg";

const Specials = () => {
    return (
        <section name="fourSteps" className="fourSteps">
            <p className="fourSteps__title">Wystarczą 4 proste kroki</p>
            <img className="fourSteps__decoration decoration" src={decoration} alt="decoration"/>
            <section className="fourSteps__information">
                <div className="fourSteps__element">
                    <img className="fourSteps__element--img" src={first} alt="img"/>
                    <p className="fourSteps__element--elementTitle">Wybierz rzeczy</p>
                    <div className="fourSteps__element--line"></div>
                    <span className="fourSteps__element--description">ubrania,zabawki, sprzęt i inne</span>
                </div>
                <div className="fourSteps__element">
                    <img className="fourSteps__element--img" src={second} alt="img"/>
                    <p className="fourSteps__element--elementTitle">Spakuj je</p>
                    <div className="fourSteps__element--line"></div>
                    <span className="fourSteps__element--description">skorzystaj z worków na śmieci</span>
                </div>
                <div className="fourSteps__element">
                    <img className="fourSteps__element--img" src={third} alt="img"/>
                    <p className="fourSteps__element--elementTitle">Zdecyduj komu chcesz pomóc</p>
                    <div className="fourSteps__element--line"></div>
                    <span className="fourSteps__element--description">wybierz zaufane miejsce</span>
                </div>
                <div className="fourSteps__element">
                    <img className="fourSteps__element--img" src={fourth} alt="img"/>
                    <p className="fourSteps__element--elementTitle">Zamów kuriera</p>
                    <div className="fourSteps__element--line"></div>
                    <span className="fourSteps__element--description">kurier przyjedzie w dogodnym terminie</span>
                </div>
            </section>
            <a href="#" className="fourSteps__button">Załóż konto</a>
        </section>
    )
}

export default Specials;