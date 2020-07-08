import React, { Component } from 'react';
import StepCounter from './StepCounter';

class FirstStep extends Component {
    state = {
        page: 1,
        checked: '',
    }

    handleChecked = (e) => {
        this.setState({
            checked: e.target.name
        })
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
                    <input type='checkbox' name='check_one' onClick={this.handleChecked}/>
                    <label htmlFor='check_one'>ubrania, które nadają się do ponownego użycia</label>
                    
                    <input type='checkbox' name='check_two' onClick={this.handleChecked}/>
                    <label htmlFor='check_two'>ubrania do wyrzucenia</label>
                    
                    <input type='checkbox' name='check_three' onClick={this.handleChecked}/>
                    <label htmlFor='check_three'>zabawki</label>

                    <input type='checkbox' name='check_four' onClick={this.handleChecked}/>
                    <label htmlFor='check_four'>książki</label>

                    <input type='checkbox' name='check_five' onClick={this.handleChecked}/>
                    <label htmlFor='check_five'>inne</label>
                </div>
                <input id='btnNextPrev' onClick={this.handleClick} type='submit' value='Dalej'/>
            </div>
        )
    }
}

export default FirstStep;