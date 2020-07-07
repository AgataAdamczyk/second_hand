import React, { Component } from 'react';
import StepCounter from './StepCounter';

class ThirdStep extends Component {
    state = {
        page: 3,
        city: '',
        clicked: false,
        orgName: '',
    }

    handleChange = (e) => {
        this.setState({
            city: e.target.value
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

    handleStyle = (e) => {
        this.setState({
            clicked: !this.state.clicked
        })
        
    }

    handleOrgName = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render() {
        let spanStyle = {
            backgroundColor: (this.state.clicked?'#f8d113':'#eeede9')
        }
        return (
            <div className='logged__form--steps'>
                < StepCounter page={this.state.page} />
                <h3>Lokalizacja:</h3>
             
                <div id='third-step'>
                    <select
                        value={this.state.city}
                        onChange={this.handleChange} className='logged-form_select'>
                        <option >&nbsp;-&nbsp;wybierz&nbsp;-&nbsp;</option>
                        <option value='Wrocław'>Wrocław</option>
                        <option value='Bielsko-Biała'>Bielsko-Biała</option>
                        <option value='Jawor'>Jawor</option>
                        <option value='Warszawa'>Warszawa</option>
                        <option value='Katowice'>Katowice</option>
                        <option value='Kraków'>Kraków</option>
                        <option value='Wadowice'>Wadowice</option>
                    </select>
                    <h3>Komu chcesz pomóc?</h3>
                        <div>
                            <span id={1} style={spanStyle} onClick={this.handleStyle}>dzieciom</span>
                            <span id={2} style={spanStyle} onClick={this.handleStyle}>samotnym matkom</span>
                            <span style={spanStyle} onClick={this.handleStyle}>bezdomnym</span>
                            <span style={spanStyle} onClick={this.handleStyle}>niepełnosprawnym</span>
                            <span style={spanStyle} onClick={this.handleStyle}>osobom starszym</span>
                        </div>
                    <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                    <input onChange={this.handleOrgName} type='text' value={this.state.orgName} id='orgName'/>
                         
                </div>
                <div>
                    <input id='btnNextPrev' onClick={this.handleClickPrev} type='submit' value='Wstecz'/>
                    <input id='btnNextPrev' onClick={this.handleClickNext} type='submit' value='Dalej'/>
                </div> 
            </div>
        )
    }
}

export default ThirdStep;