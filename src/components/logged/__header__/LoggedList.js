import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useHistory } from 'react-router-dom';

const LoggedList = () => {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory(); 
    // state = {
    //     items: [
    //         {text: 'Profil'},
    //         {text: 'Ustawienia'},
    //         {text: 'Moje zbiórki'},
    //         {text: 'Wyloguj'}
    //     ]
    // };

    const handleLogout = async e => {
        
        setError('')

        try {
            await logout();
            history.pushState("/login");

        } catch {
            setError('Spróbuj jeszcze raz!')
        }
    };

    return (
        <ul className='header__menu--list'>
            <li>
                <div className='helloName'>Witaj {currentUser.name}</div>
                <button onClick={handleLogout}>Wyloguj</button>
                {error}
            </li>
            <li className='dropdown'>
                {/* < DropDownButtonComponent select={this.select} items={this.state.items} iconCss='e-icons e-menu' cssClass='e-caret-hide' /> */}
            </li>
        </ul>
        
    )
};

export default LoggedList;