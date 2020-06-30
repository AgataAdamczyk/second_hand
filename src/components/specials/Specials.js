import React from 'react';

import SpecialsColumns from './ScpecialsColums';
import SpecialsBtn from './SpecialsBtn';

const Specials = () => {
    return (
        <section name='Specials' className="grid__container">
            <div className='specials'>
                <div className='specials__title'>
                    <h2>Wystarczą 4 proste kroki</h2> 
                    <img src={require('../../images/decoration-1.svg')} alt='decoration'/>                    
                </div>
                <div className='specials__columns'>
                    < SpecialsColumns 
                        image={require('../../images/28.svg')} 
                        specialsText='Wybierz rzeczy'
                        specialsItems='ubrania, zabawki, sprzęt i inne'
                    />
                    < SpecialsColumns
                        image={require('../../images/016.svg')} 
                        specialsText='Spakuj je'
                        specialsItems='skorzystaj z worków na&nbsp;śmieci'
                    />
                    < SpecialsColumns
                        image={require('../../images/039.svg')} 
                        specialsText='Zdecyduj komu chesz pomóc' 
                        specialsItems='wybierz zaufane miejsce'
                    />
                    < SpecialsColumns
                        image={require('../../images/58.svg')} 
                        specialsText='Zamów kuriera'
                        specialsItems='kurier przyjedzie w&nbsp;dogodnym terminie'
                    />
                </div>

                <div className='specials__btn'>
                    < SpecialsBtn text='Załóż konto' />
                </div>
            </div>
        </section>
    )
}

export default Specials;