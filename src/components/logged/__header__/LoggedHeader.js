import React from 'react';

import LoggedList from './LoggedList';
import Navigation from '../../header/Navigation';
import LoggedInfo from './LoggedInfo';

const LoggedHeader = () => {
    return(
        <header name='Header' className='grid__container'>
            <div className='logged__header'>
                <nav className='header__menu'> {/* className from section Header - main page */}
                    < LoggedList />       
                    < Navigation />   
                </nav>    
                < LoggedInfo />    
            </div>
        </header>
    )
}

export default LoggedHeader;