import React, {Component} from 'react';

// import SignInLink from './Sign_in_link';
// import SignUpLink from './Sign_up_link';
// import SideBar from "../../../../sidebar";
// import SelectBox from '../../../../node_modules';

// import { DropDownButtonComponent } from '../../../../@syncfusion/ej2-react-splitbuttons';
// import { enableRipple } from '../../../../@syncfusion/ej2-base'


// enableRipple(true);


class LoggedList extends Component {
    state = {
        items: [
            {text: 'Profil'},
            {text: 'Ustawienia'},
            {text: 'Moje zbiórki'},
            {text: 'Wyloguj'}
        ]

    }

    select(args) {
        if (args.item.text === 'Wyloguj') {
            window.open('http://localhost:3000/')
        }
    }
    
    render() {
        return (
            <ul className='header__menu--list'>
                <li>
                    <div className='helloName'>Witaj Agata!</div>
                </li>
                <li className='dropdown'>
                    {/* < DropDownButtonComponent select={this.select} items={this.state.items} iconCss='e-icons e-menu' cssClass='e-caret-hide' /> */}
                </li>
            </ul>
            
        )
    }
}

export default LoggedList;