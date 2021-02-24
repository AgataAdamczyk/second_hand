import React, { Component } from 'react';
import StepCounter from './__components__/StepCounter';

const DecorLine = () => {
    return(
        <span id='line'>-------</span>
    );
};

class FourthStep extends Component {
    state = {
        page: 4,
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
                <h3>Wybierz organizację, której chcesz pomóc:</h3>
               
                <div id='fourth-step'>
                    <DecorLine/>
                    <input type='checkbox' name='check_one'/>
                    <label htmlFor='check_one'>Fundacja "Dbam o zdrowie"</label>
                    <small className='firstSmall'>Cel i misja: Pomoc osobom znajdującym sie w trudnej sytuacji życiowej.</small>
                    
                    <DecorLine/>
                    <input type='checkbox' name='check_two'/>
                    <label htmlFor='check_two'>Fundacja "Bez domu"</label>
                    <small className='secondSmall'>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</small>
                    <DecorLine/>
                </div>
                <div>
                    <input id='btnNextPrev' onClick={this.handleClickPrev} type='submit' value='Wstecz'/>
                    <input id='btnNextPrev' onClick={this.handleClickNext} type='submit' value='Dalej'/>
                </div>
            </div>
        );
    };
};

export default FourthStep;