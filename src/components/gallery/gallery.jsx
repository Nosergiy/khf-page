import React, { Component } from 'react';
import ImgList from './imgList';
import Lightbox from './lightbox';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    id: 1,
                    heroImg: 'gallery/hero_1.jpg',
                    thumb: 'gallery/thumb_1.jpg',
                    title: 'Name',
                    category: 'local'
                },
                {
                    id: 2,
                    heroImg: 'gallery/hero_2.jpg',
                    thumb: 'gallery/thumb_2.jpg',
                    title: 'Name 2',
                    category: 'foreign'
                },
                {
                    id: 3,
                    heroImg: 'gallery/hero_3.jpg',
                    thumb: 'gallery/thumb_3.jpg',
                    title: 'Name 3',
                    category: 'local'
                },
                {
                    id: 4,
                    heroImg: 'gallery/hero_4.jpg',
                    thumb: 'gallery/thumb_4.jpg',
                    title: 'Name 4',
                    category: 'foreign'
                },
                {
                    id: 5,
                    heroImg: 'gallery/hero_5.jpg',
                    thumb: 'gallery/thumb_5.jpg',
                    title: 'Name 5',
                    category: 'local'
                },
                {
                    id: 6,
                    heroImg: 'gallery/hero_6.jpg',
                    thumb: 'gallery/thumb_6.jpg',
                    title: 'Name 6',
                    category: 'local'
                },
                {
                    id: 7,
                    heroImg: 'gallery/hero_7.jpg',
                    thumb: 'gallery/thumb_7.jpg',
                    title: 'Name 7',
                    category: 'local'
                },
                {
                    id: 8,
                    heroImg: 'gallery/hero_8.jpg',
                    thumb: 'gallery/thumb_8.jpg',
                    title: 'Name 8',
                    category: 'local'
                },
                {
                    id: 9,
                    heroImg: 'gallery/hero_9.jpg',
                    thumb: 'gallery/thumb_9.jpg',
                    title: 'Name 9',
                    category: 'local'
                },
                {
                    id: 10,
                    heroImg: 'gallery/hero_10.jpg',
                    thumb: 'gallery/thumb_10.jpg',
                    title: 'Name 10',
                    category: 'local'
                },
                {
                    id: 11,
                    heroImg: 'gallery/hero_11.jpg',
                    thumb: 'gallery/thumb_11.jpg',
                    title: 'Name 11',
                    category: 'local'
                },
                {
                    id: 12,
                    heroImg: 'gallery/hero_12.jpg',
                    thumb: 'gallery/thumb_12.jpg',
                    title: 'Name 12',
                    category: 'local'
                },
            ]
        };
    }

    render() {
        return (
            <div className="gallery">
                {/* <Lightbox slide={this.state.activeSlide}></Lightbox> */}
                <ImgList slides={this.state.slides}></ImgList>
            </div>
        );
    }
}

export default Gallery;
