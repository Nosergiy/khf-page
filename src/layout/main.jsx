import React, { Component } from 'react';
import Banner from '../components/banner';
import Weather from '../components/weather';
import Gallery from '../components/gallery/gallery';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <Banner></Banner>
                <Weather></Weather>
                <Gallery></Gallery>
            </main>
        );
    }
}

export default Main;
