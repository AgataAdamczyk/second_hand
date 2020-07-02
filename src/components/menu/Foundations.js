import React from 'react';

import Organizations from './Organizations';
import Items from './Items';

const Foundations = () => { 
    return (
        <>  
            <div className='menu__subpages'>
                <h2>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, <br/> z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
              
                <div className='menu__items'> 
                    <div className='menu__items--listLeft'>
                        <Organizations title='Fudnacja "Dbam o zdrowie"' description='Pomoc osobom znajdującym się w trudnej sytuacji życiowej.'/>
                        <Organizations title='Fundacja "Dla dzieci"' description='Pomoc dzieciom z ubogich rodzin.'/>
                        <Organizations title='Fundacja "Bez domu"' description='Pomoc dla osób nie posiadających miejsca zamieszkania.'/>
                    </div>  
                    <div className='menu__items--listRight'>
                        <Items items='ubrania, jedzenie, sprzęt AGD, meble, zabawki'/>
                        <Items items='ubrania, meble, zabawki'/>
                        <Items items='ubrania, jedzenie, ciepłe koce'/>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Foundations;