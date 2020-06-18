import React, {Component} from 'react';
import {Link, Events} from 'react-scroll';


class Navigation extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <ul className='nav__list'>
            <li><Link to='Header' className='nav__list--link' spy={true} smooth={true} duration={500}>Start</Link></li>
            <li><Link to='Specials' className='nav__list--link' spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
            <li><Link to='About' className='nav__list--link' spy={true} smooth={true} duration={500}>O nas</Link></li>
            <li><Link to='Menu' className='nav__list--link' spy={true} smooth={true} duration={500}>Fundacje i organizacje</Link></li>
            <li><Link to='Contact' className='nav__list--link' spy={true} smooth={true} duration={500}>Kontakt</Link></li>
        </ul>
        )
    }
}

export default Navigation;