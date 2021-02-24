import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuNavigation from './MenuNavigation';
import Foundations from './Foundations';
import NonGovOrg from './NonGovOrg';
import LocalCollection from './LocalCollection';
import SectionTitle from '../SectionTitle';

const Menu = () => {
    return (
        <BrowserRouter>
            <section name='Menu' className='container'>
                <div className='menu'>
                    <SectionTitle>Komu pomagamy?</SectionTitle>
                <MenuNavigation />
                    <Switch >
                        <Route path='/foundations' component={ Foundations }/>
                        <Route path='/nongovorg' component={ NonGovOrg }/>
                        <Route path='/collections' component={ LocalCollection }/>
                    </Switch> 
                    <div className='menu__pages'>
                        <Link exact to='/foundations'>1</Link>
                        <Link exact to='/nongovorg'>2</Link>
                        <Link exact to='/collections'>3</Link>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    );
};

export default Menu;