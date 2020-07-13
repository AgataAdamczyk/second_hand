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
            [e.target.id]: e.target.value,
        })    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='register__form'>
                <h3 className='register__form--h3'>Zarejestruj się
                    <img src={ Decor } alt='decor'/>
                </h3> 
                <input id='name' type='text' placeholder='Imię' value={this.state.name} onChange={this.handleChange}/>  
                <input id='email' type='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
                <input id='password' type='password' placeholder='Hasło' value={this.state.password} onChange={this.handleChange}/>
                <input id='confirmPassword' type='password' placeholder='Powtórz hasło' value={this.state.confirmPassword} onChange={this.handleChange}/>
                           
                <div className="register__form--btns">
                    <Link id='register' to='/register'>
                        <input  type='submit' value='Załóż konto'/>
                    </Link>
                    <Link id='logIn' to='/logged'>
                        <input type='submit' value='Zaloguj się'/>
                    </Link>
                </div>
            </form>
        )
    }
}

export default RegisterForm;