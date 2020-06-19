import React from 'react';

import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className="grid__container contact__content" name="contact">
            <div className="row">
                <div className="col-18 contact__header">
                        <div className="col-5">
                            <h2>Skontaktuj sie z nami</h2>
                        </div>
                    </div>
                <div/>
                <div className="row">
                    <div className="col-18 footer-decoration">
                        <div className="col-5">
                            <img src={require('../../images/decoration-1.svg')} alt="decoration"/>
                        </div>
                    </div>
                </div>
                < ContactForm />  
            </div>
            
            <footer className="row">
                <div className="col-21 footer__content">
                    <div className="col-12">
                        <h3>Copyright 2015 © by Anna Dadej</h3>
                    </div>
                    <div className="col-7">
                        <div className="col-1">
                            <a className='facebook' href="https://www.facebook.com/"><img src={require('../../images/fb.svg')} alt="facebook"/></a>
                        </div>
                        <div className="col-1">
                            <a className='instagram' href="https://www.instagram.com/?hl=pl"><img src={require('../../images/ig.svg')} alt="instagram"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Contact;