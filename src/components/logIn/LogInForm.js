import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends Component {
    state = {
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
            <form onSubmit={this.handleSubmit} className='logIn__form'>
                <h3 className='logIn__form--h3'>Zaloguj się
                    <img src={require('../../images/decoration-1.svg')} alt='decoration'/>
                </h3>   
                <input id='email' type='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
                <input id='password' type='password' placeholder='Hasło' value={this.state.password} onChange={this.handleChange}/>
                <input id='confirmPassword' type='password' placeholder='Powtórz hasło' value={this.state.confirmPassword} onChange={this.handleChange}/>
                           
                <div className="logIn__form--btns">
                    <Link id='register' to='/register/'>
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

export default LogInForm;