import React from 'react';

import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div name='Contact' className='grid__container'>
            <div className='contact'>
                <h2 className='contact--h2'>Skontaktuj sie z nami
                    <img src={require('../../images/decoration-1.svg')} alt='decoration'/>
                </h2>
                < ContactForm />  
            
                <footer className='footer'>
                    <div className='footer__media'>
                        <a className='footer__media--link' href='https://www.facebook.com/'><img src={require('../../images/fb.svg')} alt='facebook'/></a>
                        <a className='footer__media--link' href='https://www.instagram.com/?hl=pl'><img src={require('../../images/ig.svg')} alt='instagram'/></a>
                    </div>
                    <h3 className='footer--h3'>Copyright 2015 © by Anna Dadej</h3>
                </footer>
            </div>
        </div>
    )
}

export default Contact;