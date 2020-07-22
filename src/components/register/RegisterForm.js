import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Decor from '../../images/decoration-1.svg';

class RegisterForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='register__form'>
                <h3 className='register__form--h3'>Zarejestruj się
                    <img src={ Decor } alt='decor'/>
                </h3> 
                <input type='text' name='name' placeholder='Imię' value={this.state.name} onChange={this.handleChange} required/>  
                <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} required/>
                <input type='password' name='password' placeholder='Hasło' value={this.state.password} onChange={this.handleChange} required/>
                <input type='password' name='confirmPassword' placeholder='Powtórz hasło' value={this.state.confirmPassword} onChange={this.handleChange} required/>
                           
                <div className="register__form--btns">
                    <Link id='register' to='/register'>
                        <button type='submit'>Załóż konto</button>
                    </Link>
                    <Link id='logIn' to='/logged'>
                        <button type='submit'>Zaloguj się</button>
                    </Link>
                </div>
            </form>
        )
    }
}

export default RegisterForm;