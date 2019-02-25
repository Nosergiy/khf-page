import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="logo">
                    <a href="index.html">
                        <img src="logo.png" alt="logo" />
                    </a>
                </div>
                <nav className="navigation navigation__main-nav">
                    <ul className="navigation__wrapper">
                        <li className="navigation__item"><a href="index.html" className="navigation__link">Home</a></li>
                        <li className="navigation__item"><a href="index.html" className="navigation__link">Lineup</a></li>
                        <li className="navigation__item"><a href="index.html" className="navigation__link">Pricing</a></li>
                        <li className="navigation__item"><a href="index.html" className="navigation__link">Gallery</a></li>
                    </ul>
                </nav>
                <nav className="navigation navigation__sub-nav">
                    <ul className="navigation__wrapper">
                        <li className="navigation__item"><a href="index.html" className="navigation__link">Program</a></li>
                        <li className="navigation__item"><a href="index.html" className="navigation__link">History</a></li>
                        <li className="navigation__item"><a href="index.html" className="navigation__link">Sightseeing</a></li>                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
