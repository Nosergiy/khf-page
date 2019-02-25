import React, { Component } from 'react';

class Lightbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: props.slide
        }
    }
    render() {
        return (

            <div className="gallery__lightbox">
                <div className="gallery__img-holder">
                    <img src={this.state.slide.heroImg} alt="hero img"/>
                </div>
                <div className="gallery__controls">
                    <button className="prev">Prev</button>
                    <button className="next">Next</button>
                </div>
            </div>

        );
    }
}

export default Lightbox;
