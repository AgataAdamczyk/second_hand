import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        username: 'Imię',
        email: 'Email',
        message: 'Wiadomość'
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
            <form onSubmit={this.handleSubmit} id='form' name='Form'>
                <div className="row">
                    <div className="col-17 form-contact">
                        <div className="col-4">
                            <h2>FORMULARZ KONTAKTOWY</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-19 form-data">
                        <div className="col-3">
                                <input type="text" value={this.state.username} id='username' onChange={this.handleChange}/>
                        </div>
                        <div className="col-3">
                                <input type='email' value={this.state.email} id='email' onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-18 form-textarea">
                        <textarea id="message" cols="53" rows="1" value={this.state.message} onChange={this.handleChange}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-17 form-button">
                        <input type="submit" value='Wyślij' className='form-submit'/>
                    </div>
                </div>
            </form>
        )
    }
}

export default ContactForm;