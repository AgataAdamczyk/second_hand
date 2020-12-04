import React from 'react';
import HeaderBg from './HeaderBg';
import LogBtns from './LogBtns';
import Navigation from './Navigation';
import HeaderBtns from './HeaderBtns';

import Decor from '../../components/header/Decor';

const Header = () => {
    return (
        <div className='grid__container'>
            <header name='Header' className='header'>
                < HeaderBg />

                <nav className='header__nav'>
                    <div className='header__menu'>
                        < LogBtns />
                        < Navigation />
                    </div>
                    <div className='header__title'>
                        <h2>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce 
                            < Decor />
                        </h2>
                      
                    </div>     
                    <div className='header__btns'>
                        < HeaderBtns text='oddaj rzeczy' />
                        < HeaderBtns text='zorganizuj zbiórkę' />
                    </div>
                </nav>
            </header> 
        </div>
    )

}

export default Header;