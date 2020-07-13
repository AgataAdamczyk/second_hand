import React, { Component } from 'react';
import StepCounter from './__components__/StepCounter';

class ThirdStep extends Component {
    state = {
        page: 3,
        city: '',
        style: '',
        multiBtns: '',
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

    handleMultiBtns = (e) => {
        this.setState({
            multiBtns: e.target.id,
            style: e.target.id
        })
    }

    handleOrgName = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render() {
        let spanStyle = {
            backgroundColor: this.state.multiBtns !== '' ? '#f8d113' : 'transparent'
        }

        return (
            <div className='logged__form--steps'>
                < StepCounter page={this.state.page} />
                <h3>Lokalizacja:</h3>
             
                <form id='third-step'>
                    <select
                        value={this.state.city}
                        onChange={this.handleChange} className='logged-form_select'>
                        <option >&nbsp;-&nbsp;wybierz&nbsp;-&nbsp;</option>
                        <option value='Wrocław'>Wrocław</option>
                        <option value='Szczecin'>Szczecin</option>
                        <option value='Łódź'>Łódź</option>
                        <option value='Warszawa'>Warszawa</option>
                        <option value='Katowice'>Katowice</option>
                        <option value='Kraków'>Kraków</option>
                        <option value='Poznań'>Poznań</option>
                    </select>
                    <div id='multi-btns'>
                        <h4>Komu chcesz pomóc?</h4>
                        <div id='first-row'>
                            <span id='1' style={spanStyle} onClick={this.handleMultiBtns}>dzieciom</span>
                            <span id='2' style={spanStyle} onClick={this.handleMultiBtns}>samotnym matkom</span>
                            <span id='3' style={spanStyle} onClick={this.handleMultiBtns}>bezdomnym</span>
                        </div>
                        <div id='second-row'>
                            <span id='4' style={spanStyle} onClick={this.handleMultiBtns}>niepełnosprawnym</span>
                            <span id='5' style={spanStyle} onClick={this.handleMultiBtns}>osobom starszym</span>
                        </div>
                    </div>
                    <div id='select-org'>
                        <h4>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
                        <input onChange={this.handleOrgName} type='text' value={this.state.orgName} id='orgName'/>
                    </div>
                </form>
                <div>
                    <input id='btnNextPrev' onClick={this.handleClickPrev} type='submit' value='Wstecz'/>
                    <input id='btnNextPrev' onClick={this.handleClickNext} type='submit' value='Dalej'/>
                </div> 
            </div>
        )
    }
}

export default ThirdStep;