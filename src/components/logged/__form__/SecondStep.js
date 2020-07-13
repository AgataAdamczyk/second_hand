import React, { Component } from 'react';
import StepCounter from './__components__/StepCounter';

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
            
                <form id='second-step'>
                    <span>Liczba 60 l worków:</span>
                    <select onChange={this.handleChange}>
                        <option value={0}>- wybierz -</option>
                        <option value={1}>1 worek</option>
                        <option value={2}>2 worki</option>
                        <option value={3}>3 worki</option>
                        <option value={4}>4 worki</option>
                        <option value={5}>5 worków</option>
                        <option value={6}>6 worków</option>
                        <option value={7}>7 worków</option>
                        <option value={8}>8 worków</option>
                        <option value={9}>9 worków</option>
                        <option value={10}>10 i więcej</option>
                    </select>
                </form>
                <div>
                    <input id='btnNextPrev' onClick={this.handleClickPrev} type='submit' value='Wstecz'/>
                    <input id='btnNextPrev' onClick={this.handleClickNext} type='submit' value='Dalej'/>
                </div>
            </div>
        )
    }
}

export default SecondStep;