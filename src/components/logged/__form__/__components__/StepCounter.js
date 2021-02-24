import React from 'react';
import PropTypes from 'prop-types';

const StepCounter = ({ page }) => {
    return (
        <>
            <span id='step-counter'>Krok {page}/5</span>
        </>
    );
};

StepCounter.propTypes = {
    page: PropTypes.number.isRequired,
};

export default StepCounter;