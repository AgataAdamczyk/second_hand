import React from 'react';
import Rectangle from './Rectangle';

const LoggedInfo = () => {
    return (
        <>
            <div className='logged__header--title'>
                <h2>Oddaj rzeczy których już nie chcesz <br/> POTRZEBUJĄCYM </h2>
                    <img src={require('../../../images/decoration-1.svg')} alt='decoration'/>
                <h2>Wystarczą 4 proste kroki</h2>
            </div>

            <div className='logged__header--info'>
                < Rectangle 
                    number='1'
                    text='Wybierz rzeczy'
                />
                < Rectangle 
                    number='2'
                    text='Spakuj je w worki'
                />
                < Rectangle 
                    number='3'
                    text='Wybierz fundację'
                />
                < Rectangle 
                    number='4'
                    text='Zamów kuriera'
                />
            </div>
        </>
    )
}

export default LoggedInfo;