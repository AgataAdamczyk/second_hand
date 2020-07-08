import React, { Component } from 'react';
import StepCounter from './StepCounter';

class FifthStep extends Component {
    state = {
        page: 5,
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

    handleClickNext = (e) => {
        if(typeof this.props.nextPage == 'function') {
            this.props.nextPage(this.state)
        } else {
            console.log('To nie funkcja ')
        }
        e.preventDefault();
        // this.props.nextPage(this.state)
    }
    
    handleClickPrev = (e) => {
        if(typeof this.props.prevPage == 'function') {
            this.props.prevPage(this.state)
            
        } else {
            console.log('To nie funkcja');
        }
        e.preventDefault();
        // this.props.nextPage(this.state)
    }

    render() {
        return (
            <div className='logged__form--steps'> 
                < StepCounter page={this.state.page} />
                <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
               
                <div id='fifth-step'>
                    <h4>Adres odbioru</h4>
                        <label>Ulica</label>
                        <input type='text' value={this.state.street} name='street' onChange={this.handleChange}/>
                        
                        <label>Miasto</label>
                        <input type='text' value={this.state.city} name='city' onChange={this.handleChange}/>
                        
                        <label>Kod pocztowy</label>
                        <input type='text' value={this.state.postCode} name='postCode'onChange={this.handleChange}/>
                        
                        <label>Numer telefonu</label>
                        <input type='text' value={this.state.phone} name='phone' onChange={this.handleChange}/>
                       
                    <h4>Termin odbioru</h4>
                        <label>Data</label>
                        <input type='text' value={this.state.date} name='date'onChange={this.handleChange}/>
                        
                        <label>Godzina</label>
                        <input type='text' value={this.state.time} name='time' onChange={this.handleChange}/>
                        
                        <label>Uwagi dla kuriera</label>
                        <textarea type='text' value={this.state.courierInfo} name='courierInfo' onChange={this.handleChange}/>
                </div>
                <div>
                    <input id='btnNextPrev' onClick={this.handleClickPrev} type='submit' value='Wstecz'/>
                    <input id='btnNextPrev' onClick={this.handleClickNext} type='submit' value='Dalej'/>
                </div>
            </div>
        )
    }
}

export default FifthStep;