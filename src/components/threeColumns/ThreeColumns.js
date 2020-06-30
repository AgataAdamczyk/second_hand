import React from 'react';
import SingleColumn from './SingleColumn';

const ThreeColumns = () => {
    return (
        <section className='grid__container' name='ThreeColumns'>
            <div className='three__columns'>
                <SingleColumn
                    columnNumber={10} 
                    columnText='Oddanych worków'
                    columnDescription='Worków z odzieżą i obuwiem (damską, męską, dziecięcą), zabawkami, środkami czytości, itp.'
                />
                <SingleColumn  
                    columnNumber={5} 
                    columnText='Wspartych organizacji'
                    columnDescription='Do tej pory udało nam się wesprzeć: Stowarzyszenie Dzieci Matki Teresy, 
                    Fundację podaruj Nadzieję, Fabrykę Dobrych Działań, Stowarzyszenie SOS Wioski Dziecięce, 
                    Fundację Mamy Dzieci.'
                />
                <SingleColumn 
                    columnNumber={7} 
                    columnText='Zorganozowanych zbiórek'
                    columnDescription='W ramach akcji "Pomaganie Przez Ubranie" oprócz trwającej akcji online, 
                    organizowane są również stacjonarne zbiórki. Odbywają się one na terenie całej Polski.'
                />
            </div>
        </section>
    )
}

export default ThreeColumns;