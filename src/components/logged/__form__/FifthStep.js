import React, { Component } from 'react';
import StepCounter from './__components__/StepCounter';
import OrderForm from './__components__/OrderForm';

class FifthStep extends Component {
    state = {
        page: 5,
        // street: '',
        // city: '',
        // postCode: '',
        // phone: '',
        // date: '',
        // time: '',
        // courierInfo: '',
    };

    handleClickNext = (e) => {
        if(typeof this.props.nextPage == 'function') {
            this.props.nextPage(this.state)
        } else {
            console.log('To nie funkcja ')
        }
        e.preventDefault();
        // this.props.nextPage(this.state)
    };
    
    handleClickPrev = (e) => {
        if(typeof this.props.prevPage == 'function') {
            this.props.prevPage(this.state)
            
        } else {
            console.log('To nie funkcja');
        }
        e.preventDefault();
        // this.props.nextPage(this.state)
    };

    render() {
        return (
            <div className='logged__form--steps'> 
                < StepCounter page={this.state.page} />
                <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>

                < OrderForm values={this.props.values} handleOrderForm={this.props.handleOrderForm}/>
                
                <div>
                    <input id='btnNextPrev' onClick={this.handleClickPrev} type='submit' value='Wstecz'/>
                    <input id='btnNextPrev' onClick={this.handleClickNext} type='submit' value='Dalej'/>
                </div>
            </div>
        );
    };
};

export default FifthStep;