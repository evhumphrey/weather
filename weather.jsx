import React from "react";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {};
    this._getGeolocation();
  }

  componentDidMount() {

  }

  _getGeolocation() {
    window.navigator.geolocation.getCurrentPosition(this._getWeather.bind(this));
  }

  _getWeather({coords: {latitude: lat, longitude: lon}}) {
    // |°=°|
    // ( ͡° ͜ʖ ͡°)
    console.log(lat + " " + lon);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", this._setWeather);
    xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=bcb83c4b54aee8418983c2aff3073b3b`);
    xhr.send();
  }

  _setWeather({currentTarget: { response }}) {
    console.log(JSON.parse(response));
    const {name: city, wind: windData, main: tempData} = JSON.parse(response);
    console.log(city);
    console.log(windData);
    console.log(tempData);
    // ºF = 1.8 x (K - 273) + 32
    const f = 1.8 * (tempData.temp - 273) + 32;
    this.setState({
      temp: f,
      city: city,
      windDir: windData.deg,
      windSpeed: windData.speed
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">

        </div>
      </div>

    );
  }
}

export default Weather;
