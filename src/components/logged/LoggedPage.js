import React from 'react';

import LoggedHeader from './__header__/LoggedHeader';
import LoggedForm from './__form__/LoggedForm';
import Contact from '../contact/Contact';

const LoggedPage = () => {
    return (
        <>
            < LoggedHeader />
            < LoggedForm />
            < Contact/> 
        </>
    )
}

export default LoggedPage;