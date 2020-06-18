import React, {Component} from 'react';

import decoration from "../../images/decoration.png";
import facebook from "../../images/1447355328_06-facebook.png";
import instagram from "../../images/1447355379_Instagram.png";

class Contact extends Component {
    state = {};

    render() {
        return (
            <section name="contact" className="contact">
                <div className="contact__content">
                    <p className="contact__content--title">Skontaktuj się z nami</p>
                    <img src={decoration} alt="decoration" className="contact__content--decoration decoration"/>
                    <form action="#" target="_self" className="form" method="get">
                        <p className="form__title">Formularz kontaktowy</p>
                        <div className="form__inputs">
                            <label><input className="form__inputs--name" placeholder="Imię" type="text"/></label>
                            <label><input className="form__inputs--email" placeholder="E-mail" type="email"/></label>

                        </div>
                        <label><input className="form__message" placeholder="Wiadomość" type="text"/></label>
                        <input className="form__sendButton" name="submitbutton" value="Wyślij" type="submit"/>
                    </form>
                </div>
                <div className="footer">
                    <div className="footer__empty"/>
                    <p className="footer__copyright">Copyright 2015 &copy; by Anna Dadej</p>
                    <div className="footer__social">
                        <img className="footer__social--facebook" src={facebook} alt="facebook"/>
                        <img className="footer__social--instagram" src={instagram} alt="instagram"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;