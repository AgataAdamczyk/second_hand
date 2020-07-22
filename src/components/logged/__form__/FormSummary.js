import React, { Component } from 'react';
import OrderForm from './__components__/OrderForm';

import Bag from '../../../images/bag.png';
import Hand from '../../../images/hand.png';

class FormSummary extends Component {
    state = {
        placeholder: this.props.values
    }

    handleClickNext = (e) => {
        if(typeof this.props.nextPage == 'function') {
            this.props.nextPage(this.state)
        } else {
            console.log('To nie funkcja');
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
                <h3>Podsumowanie Twojej darowizny</h3>

                <h4>Oddajesz:</h4>  
                
                    <div>
                        <img src={ Bag } alt='bag'/>
                        {this.props.quantity} worki {this.props.checkedBox} dla dzieci
                    </div>

                    <div>
                        <img src={ Hand } alt='hand'/>
                     
                    </div>

                < OrderForm placeholder={this.state.placeholder} />

                <div>
                    <input id='btnNextPrev' onClick={this.handleClickPrev} type='submit' value='Wstecz'/>
                    <input id='btnNextPrev' onClick={this.handleClickNext} type='submit' value='Dalej'/>
                </div>
            </div> 
        )
    }
}

export default FormSummary;