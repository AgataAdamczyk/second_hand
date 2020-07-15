import React, { Component } from 'react';
import SingleInput from './SingleInput';

const inputsLeft = [
    {
        name: 'street',
        label: 'Ulica',
    },
    {
        name: 'city',
        label: 'Miasto',
    },
    {
        name: 'postCode',
        label: 'Kod pocztowy',
    },
    {
        name: 'phone',
        label: 'Numer telefonu',
    },
];

const inputsRight = [
    {
        name: 'date',
        label: 'Data',
    },
    {
        name: 'time',
        label: 'Godzina',
    },
];

class OrderForm extends Component {
    state = {
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        courierInfo: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div id='fifth-step'>
                <div id='col'>
                    <h4>Adres odbioru</h4>

                    {inputsLeft.map(item => (
                        < SingleInput
                            type='text'
                            key={item.name}
                            label={item.label}
                            name={item.name}
                            value={item.name}
                            onChange={this.handleChange} 
                        />
                    ))}
                </div>
                <div id='col'>
                    <h4>Termin odbioru</h4>

                    {inputsRight.map(item => (
                        < SingleInput
                            type='text'
                            key={item.name}
                            label={item.label}
                            name={item.name}
                            onChange={this.handleChange} 
                        />
                    ))}  

                    <label>Uwagi dla kuriera</label>
                    <textarea type='text' value={this.state.courierInfo} name='courierInfo' onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

export default OrderForm;