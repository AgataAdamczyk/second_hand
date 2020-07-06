import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


class HeaderBtns extends Component {
    render() {
        return (
        <NavLink to='/logIn' className='link'>
            <span>{this.props.text}</span>
        </NavLink>
        )
    }
}

export default HeaderBtns;