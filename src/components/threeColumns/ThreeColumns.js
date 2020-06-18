import React from 'react';

const ThreeColumns = () => {
    return (
        <section name="statistics" className="statistics">
            <div className="statistics__container">
                <div className="statistics__block">
                    <p className="statistics__block--count">10</p>
                    <p className="statistics__block--title">oddanych worków</p>
                    <span className="statistics__block--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores harum maxime perferendis quasi vitae!</span>
                </div>
                <div className="statistics__block">
                    <p className="statistics__block--count">5</p>
                    <p className="statistics__block--title">wspartych organizacji</p>
                    <span className="statistics__block--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores harum maxime perferendis quasi vitae!</span>
                </div>
                <div className="statistics__block">
                    <p className="statistics__block--count">7</p>
                    <p className="statistics__block--title">zorganizowanych zbiórek</p>
                    <span className="statistics__block--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores harum maxime perferendis quasi vitae!</span>
                </div>
            </div>
        </section>
    )
}

export default ThreeColumns;