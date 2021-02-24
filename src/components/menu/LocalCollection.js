import React from 'react';
import { localCollection } from '../../data/organizations';
import Organizations from './Organizations';

const LocalCollectionMenu = () => {
    return (
        <>
            <div className='menu__subpages'>
                <h2>W naszej bazie znajdziesz listę zweryfikowanych lokalnych zbiórek, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>

                {localCollection.map(item => (
                   < Organizations
                       key={item.name}
                       name={item.name}
                       mission={item.mission}
                       accepts={item.accepts}
                   />
               ))}
               
            </div>     
        </> 
    );
};

export default LocalCollectionMenu;