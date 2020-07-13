import React, { Component } from 'react';

class InputCheckbox extends Component {
    state = {
        checked: '',
    }

    handleChecked = (e) => {
        this.setState({
            checked: e.target.name
        })
    }

    render() {
        return (
            <>
                <input type='checkbox' name={this.props.name} onClick={this.handleChecked}/>
                <label htmlFor={this.props.name}>{this.props.label}</label>
            </>
        )
    }
}

export default InputCheckbox;