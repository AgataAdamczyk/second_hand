import React, { Component } from 'react';

class FormSummary extends Component {
    state = {
        page: 6,
        street: 'Kościuszki',
        city: 'Wrocław',
        postCode: '50-500',
        phone: '123-456-789',
        date: '21.11.2019',
        time: '19:45',
        courierInfo: 'Proszę dzwonić.',
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
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-10 logged-form_tip">
                        <h3>Podsumowanie Twojej darowizny</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h4>Oddajesz:</h4>
                    </div>   
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9 summaryImg">
                        <img src={require('../../../images/bag.png')} alt="bag"/>
                        4 worki ubrań w dobrym stanie dla dzieci
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9 summaryImg">
                        <img src={require('../../../images/20191-200.png')} alt="hand"/>
                        Dla fundacji "Mam marzenie" we Wrocławiu
                    </div>
                </div>
                <div className="form-group row">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-5">
                            <div className="row">
                                <h4>Adres odbioru</h4>
                            </div>
                            <div className="row">
                                <label>Ulica</label>
                                <input type="text" value={this.state.street} name='street' />
                            </div>
                            <div className="row">
                                <label>Miasto</label>
                                <input type="text" value={this.state.city} name='city' />
                            </div>
                            <div className="row">
                                <label>Kod pocztowy</label>
                                <input type="text" value={this.state.postCode} name='postCode'/>
                            </div>
                            <div className="row">
                                <label>Numer telefonu</label>
                                <input  type="text" value={this.state.phone} name='phone' />
                            </div>
                        
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <h4>Termin odbioru</h4>
                            </div>
                            <div className="row">
                                <label>Data</label>
                                <input type="text" value={this.state.date} name='date'/>
                            </div>
                            <div className="row">
                                <label>Godzina</label>
                                <input type="text" value={this.state.time} name='time' />
                            </div>
                            <div className="row">
                                <label className='courieeLabel'>Uwagi dla kuriera</label>
                                <textarea className='courierInfo' type="text" value={this.state.courierInfo} name='courierInfo'/>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div>
                    <input id='btnNextPrev' onClick={this.handleClickPrev} type='submit' value='Wstecz'/>
                    <input id='btnNextPrev' onClick={this.handleClickNext} type='submit' value='Dalej'/>
                </div>
            </div> 
        )
    }
}

export default FormSummary;