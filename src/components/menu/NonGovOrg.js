import React from 'react';

import { nonGovOrg } from '../../data/organizations';
import Organizations from './Organizations';

const NonGovMenu = () => {
    return (
        <>
            <div className='menu__subpages'>
                <h2>W naszej bazie znajdziesz listę zweryfikowanych Organizacji pozarządowych, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
        
                {nonGovOrg.map(item => (
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

export default NonGovMenu;