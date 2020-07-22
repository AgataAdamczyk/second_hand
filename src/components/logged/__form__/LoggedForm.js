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
        checkedBox: new Map(),
        quantity: '',
        orgCity: '',
        orgOptions: '',
        clicked: false,
        orgName: '',
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

    // First Step Page 

    handleChecked = (e) => {
        let item = e.target.value,
            isChecked = e.target.checked;

        this.setState(prevState => ({
            checkedBox: prevState.checkedBox.set(item, isChecked)
        }))
    }

    
    // Second Step Page 
    
    handleChange = (e) => {
        this.setState({
            quantity: e.target.value,
        })
    }

    // Third Step Page 

    handleOrgCity = (e) => {
        this.setState({
            orgCity: e.target.value,
        })
    }

    handleOrgOptions = (e) => {
        this.setState({
            orgOptions: [e.target.id],
            clicked: [e.target.id]
        })
    }

    handleOrgName = (e) => {
        this.setState({
            orgName: e.target.value,
        })
    }

    // Fifth Step Page 

    handleOrderForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    render() {
        let page, 
            notification,
            { street, city, postCode, phone, date, time, courierInfo } = this.state,
            values = { street, city, postCode, phone, date, time, courierInfo };
           

        if (this.state.page === 1) {

            page = < FirstStep 
                        nextPage={this.nextPage}
                        checkedBox={this.state.checkedBox} 
                        handleChecked={this.handleChecked} 
                    />;
            notification = < LoggedNotification text='Uzupełnij szczegóły dotyczące twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.' />;
        
        } else if (this.state.page === 2) {

            page = < SecondStep 
                        nextPage={this.nextPage} 
                        prevPage={this.prevPage} 
                        value={this.state.quantity} 
                        handleChange={this.handleChange} 
                    />;
            notification = < LoggedNotification text='Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.' />;
        
        } else if (this.state.page === 3) {

            page = < ThirdStep 
                        nextPage={this.nextPage} 
                        prevPage={this.prevPage} 
                        orgCity={this.state.orgCity} 
                        orgOptions={this.state.orgOptions} 
                        clicked={this.state.clicked}
                        orgName={this.state.orgName} 
                        handleOrgCity={this.handleOrgCity}
                        handleOrgOptions={this.handleOrgOptions}
                        handleOrgName={this.handleOrgName} 

                    />;
            notification = < LoggedNotification text='Jeśli wiesz komu chcesz pomóc możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować oragnizacje po ich likalizacji bądź celu ich pomocy.' />;
        
        } else if (this.state.page === 4) {

            page = < FourthStep 
                        nextPage={this.nextPage} 
                        prevPage={this.prevPage} 
                    />;
            notification = < LoggedNotification text='Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania wybraliśmy organizacje, którym możesz pomóc. Wybierz jedną, do której trafi Twoja przesyłka.' />;
        
        } else if (this.state.page === 5) { 

            page = <FifthStep 
                        nextPage={this.nextPage} 
                        prevPage={this.prevPage}
                        values={values}
                        handleOrderForm={this.handleOrderForm}
                    />;
            notification = <LoggedNotification text='Podaj adres oraz termin odbioru rzeczy.' />;
        
        } else if (this.state.page === 6) {

            page = < FormSummary 
                        nextPage={this.nextPage} 
                        prevPage={this.prevPage} 
                        values={values}
                        quantity={this.state.quantity}
                    />;
        
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