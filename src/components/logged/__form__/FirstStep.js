import React, { Component } from 'react';
import StepCounter from './__components__/StepCounter';
import InputCheckbox from './__components__/InputCheckbox';

const checkboxes = [
    {
        name: 'bcheckbox_1',
        label: 'ubrania, które nadają się do ponownego użycia',
        value: 'ubrań w dobrym stanie',
    },
    {
        name: 'checkbox_2',
        label: 'żywność',
        value: 'żywności',
    },
    {
        name: 'checkbox_3',
        label: 'zabawki',
        value: 'zabawek',
    },
    {
        name: 'checkbox_4',
        label: 'książki',
        value: 'książek',
    },
    {
        name: 'checkbox_5',
        label: 'inne',
        value: 'innych rzeczy w dobrym stanie',
    },
];

class FirstStep extends Component {
    state = {
        page: 1,
    };

    handleClick = (e) => {
        if(typeof this.props.nextPage == 'function') {
            this.props.nextPage(this.state)
        } else {
            console.log('To nie funkcja');
        }
        e.preventDefault();
    };
    
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
                            value={item.value}
                            checked={this.props.checkedBox.get(item.callback)} 
                            onChange={this.props.handleChecked} 
                        />
                    ))}
                </div>
                <input id='btnNextPrev' onClick={this.handleClick} type='submit' value='Dalej'/>
            </div>
        );
    };
};

export default FirstStep;