import React from 'react';
import { Link } from 'react-router-dom';

const MenuNavigation = () => {
    return (
        <div className="row">
            <div className="col-21  menu-types">
                <div className="col-4"><div className="col-2"><Link to='/foundations' className='menu-button'>Fundacjom</Link></div></div>
                <div className="col-4"><div className="col-2"><Link to='/nongovorg' className='menu-button'>Organizacjom pozarządowym</Link></div></div>
                <div className="col-4"><div className="col-2"><Link to='/collections' className='menu-button'>Lokalnym zbiórkom</Link></div></div>
            </div>
        </div>
    )
}
      
export default MenuNavigation;