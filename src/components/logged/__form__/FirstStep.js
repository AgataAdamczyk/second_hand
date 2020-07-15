import React, { Component } from 'react';

import StepCounter from './__components__/StepCounter';
import InputCheckbox from './__components__/InputCheckbox';

const checkboxes = [
    {
        name: 'check_one',
        label: 'ubrania, które nadają się do ponownego użycia',
    },
    {
        name: 'check_two',
        label: 'ubrania do wyrzucenia',
    },
    {
        name: 'check_three',
        label: 'zabawki',
    },
    {
        name: 'check_four',
        label: 'książki',
    },
    {
        name: 'check_five',
        label: 'inne',
    },
];

class FirstStep extends Component {
    state = {
        page: 1,
        checkedBox: new Map(),
    }

    handleChecked = (e) => {
        let item = e.target.name,
            isChecked = e.target.checked;

        this.setState(prevState => ({
            checkedBox: prevState.checkedBox.set(item, isChecked)
        }))
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
                    {checkboxes.map(item => (
                        < InputCheckbox
                            key={item.name}
                            label={item.label}
                            name={item.name} 
                            checked={this.state.checkedBox.get(item.name)} 
                            onChange={this.handleChecked} 
                        />
                    ))}
                </div>
                <input id='btnNextPrev' onClick={this.handleClick} type='submit' value='Dalej'/>
            </div>
        )
    }
}

export default FirstStep;