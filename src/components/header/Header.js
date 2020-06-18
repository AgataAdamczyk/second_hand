import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeaderBg from './HeaderBg';
import LogBtns from './LogBtns';
import Navigation from './Navigation';
import HeaderBtns from './HeaderBtns';


class Header extends Component {
    render() {
        return (
        <header name='Header'>
            <div className='grid__container'>
                <div className="row">
                    <Link to='/'>
                        <div className="col-10">
                            < HeaderBg />
                        </div>
                    </Link>
                    <nav className='col-10 navigation__container'>
                        <div className='row'>
                            <div className='col-9'>
                                < LogBtns />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                < Navigation />  
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 header__title">
                                <h2>Zacznij pomagać!</h2>
                                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 header__decoration">
                                <img src={require('../../images/decoration-1.svg')} alt="decoration"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 header__buttons">
                                <HeaderBtns text='ODDAJ RZECZY'/>
                                <HeaderBtns text='ZOORGANIZUJ ZBIÓRKĘ'/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        )
    }
}

export default Header;