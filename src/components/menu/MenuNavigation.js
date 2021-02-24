import React from 'react';
import { Link } from 'react-router-dom';

const MenuNavigation = () => {
    return (
        <div className='menu__navigation'>
            <div className='menu__navigation--link'><Link to='/foundations'>Fundacjom</Link></div>
            <div className='menu__navigation--link'><Link to='/nongovorg'>Organizacjom pozarządowym</Link></div>
            <div className='menu__navigation--link'><Link to='/collections'>Lokalnym zbiórkom</Link></div>
        </div>
    );
};
      
export default MenuNavigation;