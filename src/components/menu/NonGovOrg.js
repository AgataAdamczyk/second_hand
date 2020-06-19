
import React, { Component } from 'react';
import Items from './Items';
import Organization from './Organizations';


class NonGovMenu extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-21 menu-description">
                        <h3 className='col-9'>W naszej bazie znajdziesz listę zweryfikowanych Organizacji pozarządowych, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-21 menu-info_container">
                        <div className="col-17 menu-info">
                            <div className="col-8 menu-info_foundation">
                                <Organization title='"Lorem Ipsum"' description='Lorem ipsum dolor sit amet consectetur.'/> 
                                <Organization title='"Lorem Ipsum"' description='Lorem ipsum dolor sit amet consectetur.'/>
                                <Organization title='"Lorem Ipsum"' description='Lorem ipsum dolor sit amet consectetur.'/>
                            </div>
                            <div className="col-7 menu-info_items">
                                <Items items='Lorem ipsum dolor sit amet consectetur.'/>
                                <Items items='Lorem ipsum dolor sit amet consectetur.'/>
                                <Items items='Lorem ipsum dolor sit amet consectetur.'/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </> 
        )
    }
}

export default NonGovMenu;