import React, {Component} from 'react';
import Decor from '../header/Decor';
import FormBtns from './FormBtns';

class SignUpForm extends Component {
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
            <form onSubmit={this.handleSubmit} className='signup__form'>
                <h3 className='signup__form--h3'>Zarejestruj się
                    < Decor />
                </h3> 
                <input type='text' name='name' placeholder='Imię' value={this.state.name} onChange={this.handleChange} required/>  
                <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} required/>
                <input type='password' name='password' placeholder='Hasło' value={this.state.password} onChange={this.handleChange} required/>
                <input type='password' name='confirmPassword' placeholder='Powtórz hasło' value={this.state.confirmPassword} onChange={this.handleChange} required/>

                < FormBtns />        
            </form>
        )
    }
}

export default SignUpForm;