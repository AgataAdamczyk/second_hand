import React, { Component } from 'react';
import StepCounter from './StepCounter';

class SecondStep extends Component {
    state = {
        page: 2,
        quantity: '',
    }

    handleChange = (e) => {
        this.setState({
            quantity: e.target.value
        })
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
                < StepCounter page={this.state.page} />
                <h3>Podaj liczbę 60l worków w które spakowałeś/aś rzeczy:</h3>
            
                <div className='second-step'>
                    <span>Liczba 60 l worków:</span>
                        <select
                        value={this.state.item}
                        onChange={this.handleTitleChange} className='logged-form_select'>
                            <option >&nbsp;-&nbsp;wybierz&nbsp;-&nbsp;</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={4}>5</option>
                            <option value={4}>6</option>
                            <option value={4}>7</option>
                            <option value={4}>8</option>
                            <option value={4}>9</option>
                            <option value={4}>10</option>
                        </select>
                </div>
                <div>
                    <input id='btnNextPrev' onClick={this.handleClickPrev} type='submit' value='Wstecz'/>
                    <input id='btnNextPrev' onClick={this.handleClickNext} type='submit' value='Dalej'/>
                </div>
            </div>
        )
    }
}

export default SecondStep;