
import React, {Component} from 'react';
import LogIn from './LogIn';
import Register from './Register';


class LogBtns extends Component { 
    render() {
        return (
        
            <ul className='log__list'>
                <li>< LogIn /></li>
                <li>< Register /></li>
            </ul>
            
        )
    }
}

export default LogBtns;