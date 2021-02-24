import React from 'react';
import SectionTitle from '../../SectionTitle';
import Rectangle from './Rectangle';

const LoggedInfo = () => {
    return (
        <div className='logged__header'>
            <SectionTitle>Oddaj rzeczy których już nie chcesz <br/> POTRZEBUJĄCYM </SectionTitle>
            <h2 className='section__title'>Wystarczą 4 proste kroki:</h2>

            <div className='logged__header--info'>
                <Rectangle 
                    number='1'
                    text='Wybierz rzeczy'
                />
                <Rectangle 
                    number='2'
                    text='Spakuj je w worki'
                />
                <Rectangle 
                    number='3'
                    text='Wybierz fundację'
                />
                <Rectangle 
                    number='4'
                    text='Zamów kuriera'
                />
            </div>
        </div>
    );
};

export default LoggedInfo;