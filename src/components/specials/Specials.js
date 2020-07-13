import React from 'react';

import SpecialsColumns from './ScpecialsColums';
import SpecialsBtn from './SpecialsBtn';

import Decor from '../../images/decoration-1.svg';
import Hands from '../../images/28.svg';
import Arrow from '../../images/016.svg';
import Search from '../../images/039.svg';
import Order from '../../images/58.svg';


const Specials = () => {
    return (
        <section name='Specials' className="grid__container">
            <div className='specials'>
                <div className='specials__title'>
                    <h2 className='specials__title--header'>Wystarczą 4 proste kroki</h2> 
                    <img className='specials__title--decor' src={ Decor } alt='decor'/>                    
                </div>
                <div className='specials__columns'>
                    < SpecialsColumns 
                        image={ Hands } 
                        specialsText='Wybierz rzeczy'
                        specialsItems='ubrania, zabawki, sprzęt i inne'
                    />
                    < SpecialsColumns
                        image={ Arrow } 
                        specialsText='Spakuj je'
                        specialsItems='skorzystaj z worków na&nbsp;śmieci'
                    />
                    < SpecialsColumns
                        image={ Search } 
                        specialsText='Zdecyduj komu chesz pomóc' 
                        specialsItems='wybierz zaufane miejsce'
                    />
                    < SpecialsColumns
                        image={ Order } 
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