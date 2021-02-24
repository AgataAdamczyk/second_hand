import React from 'react';
import DropdownMenu from './DropdownMenu';
import HeaderMenu from '../../header/HeaderMenu';
import LoggedInfo from './LoggedInfo';

const LoggedHeader = () => {
    return(
        <header name='Header' className='container'>
            <div className='logged__navigation'>
                <nav className='navigation'>
                    <DropdownMenu/>       
                    <HeaderMenu />   
                </nav>  
                <LoggedInfo />    
            </div>
        </header>
    );
};

export default LoggedHeader;