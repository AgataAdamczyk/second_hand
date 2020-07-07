import React, { Component } from 'react';
import StepCounter from './StepCounter';

class FirstStep extends Component {
    state = {
        page: 1,
    }

    handleClick = (e) => {
        if(typeof this.props.nextPage == 'function') {
            this.props.nextPage(this.state)
        } else {
            console.log('To nie funkcja');
        }
        e.preventDefault();
    }
    
    render() {
        return (
            <div className='logged__form--steps'> 
                < StepCounter page={this.state.page} />
                <h3>Zaznacz co chcesz oddać:</h3>

                <div id='first-step'>
                    <input type='checkbox' name='check_one'/>
                    <label htmlFor='check_one'>ubrania, które nadają się do ponownego użycia</label>
                    
                    <input type='checkbox' name='check_two'/>
                    <label htmlFor='check_two'>ubrania do wyrzucenia</label>
                    
                    <input type='checkbox' name='check_three'/>
                    <label htmlFor='check_three'>zabawki</label>

                    <input type='checkbox' name='check_four'/>
                    <label htmlFor='check_four'>książki</label>

                    <input type='checkbox' name='check_five'/>
                    <label htmlFor='check_five'>inne</label>
                </div>
                <input id='btnNextPrev' onClick={this.handleClick} type='submit' value='Dalej' name={1} />
            </div>
        )
    }
}

export default FirstStep;