import React from 'react';
import { Link } from 'react-router-dom';

import LoggedImg from './LoggedImg';
import LoggedList from './LoggedList';
import Navigation from '../../header/Navigation';
import LoggedInfo from './LoggedInfo';

const LoggedHeader = () => {
    return(
        <header name='Header' className='grid__container'>
            <div className='logged__header'>
                <Link to='/logged'>
                    < LoggedImg />
                </Link>
    
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