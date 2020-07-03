import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        username: '',
        email: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form name='Form' onSubmit={this.handleSubmit} className='contact__form'>
                <h3 className='contact__form--h3'>Formularz kontaktowy</h3>
              
                <input id='username' type='text' placeholder='Imię' value={this.state.username} onChange={this.handleChange}/>
                <input id='email' type='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
                <textarea id='message' rows='1' placeholder='Wiadomość' value={this.state.message} onChange={this.handleChange}></textarea>
             
                <input id='btn' type='submit' value='Wyślij'/>
            </form>
        )
    }
}

export default ContactForm;