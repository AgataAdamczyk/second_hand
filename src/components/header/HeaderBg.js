import React, {Component} from 'react';

class HeaderBg extends Component {
    render() {
        return (
            <div className='header__bg'>
                <img src={require('../../images/header_start_img.jpg')} alt="header_bg"/>
            </div>
        )
    }
}

export default HeaderBg;