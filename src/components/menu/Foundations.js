import React from 'react';
import { foundations } from '../../data/organizations';
import Organizations from './Organizations';

const Foundations = () => { 
    return (
        <>  
            <div className='menu__subpages'>
                <h2>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, <br/> z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
                
                {foundations.map(item => (
                    < Organizations
                        key={item.name}
                        name={item.name}
                        mission={item.mission}
                        accepts={item.accepts}
                    />
                ))}
                
            </div>
        </> 
    )
}

export default Foundations;