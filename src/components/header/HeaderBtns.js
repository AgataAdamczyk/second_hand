import React from 'react';
import { NavLink } from 'react-router-dom';


const HeaderBtns = (props) => {
    return (
        <NavLink to='/logIn' className='link'>
            <span>{props.text}</span>
        </NavLink>
    )
}

export default HeaderBtns;