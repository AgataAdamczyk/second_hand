import React, {Component} from 'react';

import Header from './header/Header';
import ThreeColumns from './threeColumns/ThreeColumns';
import Specials from './specials/Specials';
import About from './about/About.js';
import Menu from './menu/Menu';
import Contact from './contact/Contact';


class Home extends Component {
  render() {
    return (
        <>
            <Header/>
            <ThreeColumns/>
            <Specials/>
            <About/>
            <Menu/>
            <Contact/>
        </>
    )
  }
}

export default Home;