import React, { Component } from 'react';

import LoggedNotification from './__components__/LoggedNotification';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import FifthStep from './FifthStep';
import FormSummary from './FormSummary';
import FormThanks from './FormThanks';

class LoggedForm extends Component {
    state = {
        checked: false,
        page: 1,
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        courierInfo: '',
    }

    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    prevPage = () => {
        this.setState({
            page: this.state.page - 1
        })
    }
    
    render() {
        let page,
            notification;

        if (this.state.page === 1) {

            page = < FirstStep nextPage={this.nextPage} />;
            notification = < LoggedNotification text='Uzupełnij szczegóły dotyczące twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.' />;
        
        } else if (this.state.page === 2) {

            page = < SecondStep nextPage={this.nextPage} prevPage={this.prevPage} />;
            notification = < LoggedNotification text='Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.' />;
        
        } else if (this.state.page === 3) {

            page = < ThirdStep nextPage={this.nextPage} prevPage={this.prevPage} />;
            notification = < LoggedNotification text='Jeśli wiesz komu chcesz pomóc możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować oragnizacje po ich likalizacji bądź celu ich pomocy.' />;
        
        } else if (this.state.page === 4) {

            page = < FourthStep nextPage={this.nextPage} prevPage={this.prevPage} />;
            notification = < LoggedNotification text='Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania wybraliśmy organizacje, którym możesz pomóc. Wybierz jedną, do której trafi Twoja przesyłka.' />;
        
        } else if (this.state.page === 5) { 

            page = <FifthStep nextPage={this.nextPage} prevPage={this.prevPage}/>;
            notification = <LoggedNotification text='Podaj adres oraz termin odbioru rzeczy.' />;
        
        } else if (this.state.page === 6) {

            page = < FormSummary nextPage={this.nextPage} prevPage={this.prevPage} callbackFromParent />;
        
        } else if (this.state.page === 7) {

            page = < FormThanks />;
        
        } else {
            return null;
        }

        return (
            <form className='logged__form'>
                { notification }
                { page }
            </form>
        )
    }
}

export default LoggedForm;