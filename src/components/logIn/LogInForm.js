import React, {Component} from 'react';
import Decor from '../header/Decor';
import FormBtns from '../signUp/FormBtns';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
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
            <form onSubmit={this.handleSubmit} className='login__form'>
                <h3 className='login__form--h3'>Zaloguj się
                    < Decor />
                </h3>   
                <input id='email' type='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
                <input id='password' type='password' placeholder='Hasło' value={this.state.password} onChange={this.handleChange}/>
                           
                < FormBtns />
            </form>
        )
    }
}

export default LoginForm;