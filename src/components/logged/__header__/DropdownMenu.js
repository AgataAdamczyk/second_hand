import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useHistory } from 'react-router-dom';

const DropdownMenu = () => {
    const [isActive, setIsActive] = useState(false)
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory(); 
   
    const toggleDropdownMenu = () => setIsActive(!isActive)

    const handleLogout = async e => {
        setError('')

        try {
            await logout();
            history.pushState('/login');

        } catch {
            setError('Spróbuj jeszcze raz!')
        };
    };

    return (
        <div className='dropdown__container'>
            <span className='dropdown__container--header'>Witaj {currentUser.displayName}</span>
            <button className='dropdown__container--btn' onClick={toggleDropdownMenu}></button>
            <div className={isActive ? 'dropdown--active' : 'dropdown'}>
                <ul className='dropdown__list'>
                    <li className='dropdown__list--item'>Profil</li>
                    <li className='dropdown__list--item'>Ustawienia</li>
                    <li className='dropdown__list--item'>Moje zbiórki</li>
                    <li className='dropdown__list--item' onClick={handleLogout}>Wyloguj</li>
                    {error}
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;