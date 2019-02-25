import React, { Component } from 'react';

class imgList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: props.slides
        }
    }
    render() {
        return (

            <div className="gallery__wrapper">
                <ul>
                    {
                        this.state.slides.map((slide) => {
                            return (
                                <li className="gallery__item" key={slide.id}>
                                    <a href=""><img src={slide.thumb} alt="photo"/></a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default imgList;
