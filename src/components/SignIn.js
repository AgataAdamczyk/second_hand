import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Navigation from './header/Navigation';
import LogBtns from './header/LogBtns';

class SignIn extends Component {
    state = {
        email: 'email',
        password: 'password',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })    
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    
    render() {
        return (
            <section className='grid-container signin'>
                <div className="row">
                    <div className="col-10"></div>
                    <nav className="col-11">
                        <div className='row'>
                            <div className='col-9'>
                                < LogBtns />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                < Navigation />  
                            </div>
                        </div>  
                    </nav>
                </div>

                <form onSubmit={this.handleSubmit} className='signin-form row'>
                        
                        <div className="row title">
                            <div className="col-21 signin-title">
                                <h3>Zaloguj się</h3>
                            </div>
                        </div>    
                        <div className="row">
                            <div className="col-21 decoration">
                                <img src={require('../images/decoration-1.svg')} alt="decoration"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-21">
                                <div className="col-4 signin-data">
                                    <input type='email' value={this.state.email} id='email' onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-21">
                                <div className="col-4 signin-data">
                                    <input type='email' value={this.state.password} id='password' onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="row signin-buttons">
                            <div className="col-21">
                                <div className="col-2 form-button">
                                    <input type="submit" value='Załóż konto' className='form-submit signup-btn'/>
                                </div>
                                <div className="col-2 form-button">
                                    <Link to='/logged/'>
                                        <input type="submit" value='Zaloguj się' className='form-submit signin-btn'/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </form>
            </section>
        )
    }
}

export default SignIn;