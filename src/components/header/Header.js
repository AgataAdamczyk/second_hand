import React from 'react';
import AuthBtns from './AuthBtns';
import HeaderMenu from './HeaderMenu';
import ButtonLink from '../buttons/ButtonLink';
import SectionTitle from '../SectionTitle';

const Header = () => {
    return (
        <div className='container'>
            <header name='Header' className='header'>
                <nav className='navigation'>
                    <AuthBtns />
                    <HeaderMenu />
                </nav> 
                <div className='header__title'>
                  <SectionTitle>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</SectionTitle>  
                </div>   
                <div className='header__btns'>
                    <ButtonLink pathName='/login' text='oddaj rzeczy' />
                    <ButtonLink pathName='/login' text='zorganizuj zbiórkę' />
                </div>
            </header> 
        </div>
    );
};

export default Header;