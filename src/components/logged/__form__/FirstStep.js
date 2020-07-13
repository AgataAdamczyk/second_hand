import React, { Component } from 'react';

import StepCounter from './__components__/StepCounter';
import InputCheckbox from './__components__/InputCheckbox';

class FirstStep extends Component {
    state = {
        page: 1,
    }

    // handleChecked = (e) => {
    //     this.setState({
    //         checked: e.target.name
    //     })
    // }


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

                <form id='first-step'>
                    < InputCheckbox 
                        name='check_one' 
                        label='ubrania, które nadają się do ponownego użycia'
                    />

                    < InputCheckbox 
                        name='check_two'
                        label='ubrania do wyrzucenia'
                    />

                    < InputCheckbox 
                        name='check_three' 
                        label='zabawki'
                    />

                    < InputCheckbox 
                        name='check_four' 
                        label='książki'
                    />

                    < InputCheckbox 
                        name='check_five' 
                        label='inne'
                    />

                    {/* <input type='checkbox' name='check_one' onClick={this.handleChecked}/>
                    <label htmlFor='check_one'>ubrania, które nadają się do ponownego użycia</label>
                    
                    <input type='checkbox' name='check_two' onClick={this.handleChecked}/>
                    <label htmlFor='check_two'>ubrania do wyrzucenia</label>
                    
                    <input type='checkbox' name='check_three' onClick={this.handleChecked}/>
                    <label htmlFor='check_three'>zabawki</label>

                    <input type='checkbox' name='check_four' onClick={this.handleChecked}/>
                    <label htmlFor='check_four'>książki</label>

                    <input type='checkbox' name='check_five' onClick={this.handleChecked}/>
                    <label htmlFor='check_five'>inne</label> */}
                </form>
                <input id='btnNextPrev' onClick={this.handleClick} type='submit' value='Dalej'/>
            </div>
        )
    }
}

export default FirstStep;