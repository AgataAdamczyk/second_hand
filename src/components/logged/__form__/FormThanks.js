import React, { Component } from 'react';

class FormThanks extends Component {
 
    state = {
        page: 7,    
    }

    render() {
        return (
            <div className='logged__form--thanks'>
                <h2>Dziękujemy za przesłanie formularza. Wszelkie informacje o odbiorze prześlemy mailowo.</h2>
                <img src={require('../../../images/decoration-1.svg')} alt="decoration"/>
            </div>
        )
    }
}

export default FormThanks;