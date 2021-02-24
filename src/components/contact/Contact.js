import React from "react";
import ContactForm from './ContactForm';
import SectionTitle from '../SectionTitle';

const Contact = () => {
    return (
        <div name='Contact' className='container'>
            <div className='contact'>
                <SectionTitle>Skontaktuj się z nami</SectionTitle>
                <ContactForm />  
            
                <footer className='footer'>
                    <div className='footer__media'>
                        <a className='footer__media--link' href='https://www.facebook.com/'><img src={require('../../images/fb.svg')} alt='facebook'/></a>
                        <a className='footer__media--link' href='https://www.instagram.com/?hl=pl'><img src={require('../../images/ig.svg')} alt='instagram'/></a>
                    </div>
                    <h3 className='footer--h3'>Copyright 2015 © by Anna Dadej</h3>
                </footer>
            </div>
        </div>
    );
};

export default Contact;