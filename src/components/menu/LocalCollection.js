import React from 'react';

import Organization from './Organizations';
import Items from './Items';

const LocalCollectionMenu = () => {
    return (
        <>
            <div className='menu__subpages'>
                <h2>W naszej bazie znajdziesz listę zweryfikowanych lokalnych zbiórek, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
                    
                <div className='menu__items'> 
                    <div className='menu__items--listLeft'> 
                        <Organization title='Zbiórka "Lorem Ipsum"' description='Lorem ipsum dolor sit amet consectetur.'/> 
                        <Organization title='Zbiórka "Lorem Ipsum"' description='Lorem ipsum dolor sit amet consectetur.'/>
                        <Organization title='Zbiórka "Lorem Ipsum"' description='Lorem ipsum dolor sit amet consectetur.'/>
                    </div>
                    <div className='menu__items--listRight'>
                        <Items items='Lorem ipsum dolor sit amet consectetur.'/>
                        <Items items='Lorem ipsum dolor sit amet consectetur.'/>
                        <Items items='Lorem ipsum dolor sit amet consectetur.'/>
                    </div>
                </div>
            </div>     
        </> 
    )
}

export default LocalCollectionMenu;