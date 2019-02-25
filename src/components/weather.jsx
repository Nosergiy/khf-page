import React, { Component } from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherApiResponse: {}
        };
        this.getWeatherInKharkiv = this.getWeatherInKharkiv.bind(this);
    }

    componentWillMount() {
        this.getWeatherInKharkiv();
    }

    render() {
        if (!this.state.weatherApiResponse.weather) {
            return <p> Fetching Data </p>
        } else {
            return (
                <div id="weather-widget" className="weather-widget">
                    <div className="weather-headings">
                        <h2 className="weather-widget__city-name">Weather in Kharkiv, UA</h2>
                        <h3 className="weather-widget__temperature">
                            <img src={`https://openweathermap.org/img/w/${this.state.weatherApiResponse.weather[0].icon}.png`} alt="" />
                            {this.state.weatherApiResponse.main.temp} °C

                        </h3>
                        <p className="weather-widget__main"></p>
                        <p>16:42 Feb 15</p>
                    </div>
                    <table className="weather-widget__items">
                        <tbody>
                            <tr className="weather-widget__item">
                                <td>Wind</td>
                                <td id="weather-widget-wind">Moderate breeze,6.0 m/s, {this.getWindDirection(this.state.weatherApiResponse.wind.deg)}  ( {this.state.weatherApiResponse.wind.deg} )</td>
                            </tr>
                            <tr className="weather-widget__item">
                                <td>Cloudiness</td>
                                <td id="weather-widget-cloudiness">
                                    {this.state.weatherApiResponse.weather[0].description}
                                </td>
                            </tr>
                            <tr className="weather-widget__item">
                                <td>Pressure</td>
                                <td>
                                    {this.state.weatherApiResponse.main.pressure} hpa</td>
                            </tr>
                            <tr className="weather-widget__item">
                                <td>Humidity</td>
                                <td>
                                    {this.state.weatherApiResponse.main.humidity} %</td>
                            </tr>
                            <tr className="weather-widget__item">
                                <td>Sunrise</td>
                                <td>{this.calculateSunState('sunrise')}</td>
                            </tr>
                            <tr className="weather-widget__item">
                                <td>Sunset</td>
                                <td>{this.calculateSunState('sunset')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    getWindDirection(degree) {
        if (degree > 337.5) return 'Northerly';
        if (degree > 292.5) return 'North Westerly';
        if (degree > 247.5) return 'Westerly';
        if (degree > 202.5) return 'South Westerly';
        if (degree > 157.5) return 'Southerly';
        if (degree > 122.5) return 'South Easterly';
        if (degree > 67.5) return 'Easterly';
        if (degree > 22.5) return 'North Easterly';

        return 'Northerly';
    }

    calculateSunState(direction = 'sunrise') {
        const date = new Date(this.state.weatherApiResponse.sys[direction] * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return hours < 10 ? `0${hours}:${minutes}` : `${hours}:${minutes}`;
    }

    getWeatherInKharkiv() {
        const apiKey = 'e0e9ab467b2976352408a51f4872a564';
        const city = 'Kharkiv';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weatherApiResponse: data
                });
            })
    }
}
export default Weather;
