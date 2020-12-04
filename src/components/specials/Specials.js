import React from 'react';
import SpecialsColumns from './ScpecialsColums';
import SpecialsBtn from './SpecialsBtn';
import Decor from '../../images/decoration-1.svg';
import { specialsColumns } from '../../data/specialsColumns';

const Specials = () => {
    return (
        <section name='Specials' className='grid__container'>
            <div className='specials'>
                <div className='specials__title'>
                    <h2 className='specials__title--header'>Wystarczą 4 proste kroki</h2> 
                    <img className='specials__title--decor' src={ Decor } alt='decor'/>                    
                </div>
                <div className='specials__columns'>
                    {specialsColumns.map(item => (
                        < SpecialsColumns key={item.image} {...item} />
                    ))}
                </div>

                <div className='specials__btn'>
                    < SpecialsBtn text='Załóż konto' />
                </div>
            </div>
        </section>
    )
}

export default Specials;