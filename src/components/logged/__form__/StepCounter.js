import React, {Component} from 'react';

class StepCounter extends Component {
    render() {
        return (
            <>
                <span id='step-counter'>Krok {this.props.page}/5</span>
            </>
        )
    }
}

export default StepCounter;