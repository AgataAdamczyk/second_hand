import React from 'react';

import SpecialsColumns from './ScpecialsColums';
import SpecialsBtn from './SpecialsBtn';

const Specials = () => {
    return (
        <section name='Specials' className="grid__container" id="specials">
            <div className="row">
                <div className="col-21 specials__header">
                    <h2>Wystarczą 4 proste kroki</h2>                        
                </div>
            </div>
            <div className="row">
                <div className="col-21 specials__decoration">
                    <img src={require('../../images/decoration-1.svg')} alt="decoration"/>
                </div>
            </div>
            <div className="row">
                <div className="col-21 specials__content">
                    <div className="col-13 specials__columns">
                        < SpecialsColumns 
                            image={require("../../images/28.svg")} 
                            specialsText="Wybierz rzeczy"
                            specialsItems="ubrania, zabawki, sprzęt i inne"
                        />
                        < SpecialsColumns
                            image={require("../../images/016.svg")} 
                            specialsText="Spakuj je"
                            specialsItems="skorzystaj z worków na śmieci"
                        />
                        < SpecialsColumns
                            image={require("../../images/039.svg")} 
                            specialsText="Zdecyduj komu chesz pomóc" 
                            specialsItems="wybierz zaufane miejsce"
                        />
                        < SpecialsColumns
                            image={require("../../images/58.svg")} 
                            specialsText="Zamów kuriera"
                            specialsItems="kurier przyjedzie w dogodnym terminie"
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-21 specials__btn">
                    < SpecialsBtn text="Załóż konto" />
                </div>
            </div>
        </section>
    )
}

export default Specials;