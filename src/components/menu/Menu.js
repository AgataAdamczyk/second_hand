import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import MenuNavigation from './MenuNavigation';
import Foundations from './Foundations';
import NonGovOrg from './NonGovOrg';
import LocalCollection from './LocalCollection';

const Menu = () => {
    return (
        <BrowserRouter>
            <section name='Menu' className="grid__container menu-container" id='menu'>
                <div className="row">
                    <div className="col-21 menu-title">
                        <h2>Komu pomagamy?</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-21 menu-decoration">
                        <img src={require('../../images/decoration-1.svg')} alt="decoration" className='decoration'/>
                    </div>
                </div>
                <nav className='menu-nav'>
                    < MenuNavigation />
                    <Switch >
                        <Route path='/foundations' component={ Foundations}/>
                        <Route path='/nongovorg' component={ NonGovOrg }/>
                        <Route path='/collections' component={ LocalCollection }/>
                    </Switch>
                </nav>    

                <div className="row">
                    <div className="col-21 menu-pages">
                        <div className="col-1"><Link exact to='/foundations' className='pageNum' activeClassName="active">1</Link></div>
                        <div className="col-1"><Link exact to='/nongovorg' className='pageNum' activeClassName="active">2</Link></div>
                        <div className="col-1"><Link exact to='/collections' className='pageNum' activeClassName="active">3</Link></div>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    )
}

export default Menu;