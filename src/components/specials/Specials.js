import React from 'react';
import SpecialsColumns from './ScpecialsColums';
import { specialsColumns } from '../../data/specialsColumns';
import ButtonLink from '../buttons/ButtonLink';
import SectionTitle from '../SectionTitle';

const Specials = () => {
    return (
        <section name='Specials' className='container'>
            <div className='specials'>
                <SectionTitle>Wystarczą 4 proste kroki</SectionTitle>                    
                <div className='specials__columns'>
                    {specialsColumns.map(item => (
                        <SpecialsColumns key={item.image} {...item} />
                    ))}
                </div>

                <div className='specials__btn'>
                    <ButtonLink pathName='/login' text='Załóż konto' />
                </div>
            </div>
        </section>
    );
};

export default Specials;