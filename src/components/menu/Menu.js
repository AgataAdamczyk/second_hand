import React, {Component} from 'react';

import decoration from "../../images/decoration.png";


class Menu extends Component {
    render() {
        return (
            <>
            <section name="whoWeHelp" className="whoWeHelp">
                <div className="whoWeHelp__select">
                    <p className="whoWeHelp__select--title">Komu pomagamy?</p>
                    <img className="whoWeHelp__select--decoration decoration" src={decoration} alt="decoration"/>
                    <div className="whoWeHelp__navigation">
                        <a className="whoWeHelp__navigation--button whoWeHelp__navigation--btnsel" href="#">Fundacjom</a>
                        <a className="whoWeHelp__navigation--button" href="#">Organizacjom pozarządowym</a>
                        <a className="whoWeHelp__navigation--button" href="#">Lokalnym zbiórkom</a>
                    </div>
                    <span className="whoWeHelp__select--information">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</span>
                </div>


            </section>
            </>
        )
    }
}

export default Menu;