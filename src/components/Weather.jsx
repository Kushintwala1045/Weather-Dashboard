import React from 'react'

function Weather() {
  return (
    <div>
      <>
  <meta charSet="utf-8" />
  <title>Weather App Project </title>
  <link rel="stylesheet" href="style.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <h1>Weather Dashboard</h1>
  <div className="container">
    <div className="weather-input">
      <h3>Enter a City Name</h3>
      <input
        className="city-input"
        type="text"
        placeholder="E.g., Mumbai, Gujarat, Delhi"
      />
      <button className="search-btn">Search</button>
      <div className="separator" />
      <button className="location-btn">Use Current Location</button>
    </div>
    <div className="weather-data">
      <div className="current-weather">
        <div className="details">
          <h2 />
          <h6>Temperature: °C</h6>
          <h6>Wind: M/S</h6>
          <h6>Humidity: %</h6>
        </div>
      </div>
      <div className="days-forecast">
        <h2>5-Day Forecast</h2>
        <ul className="weather-cards">
          <li className="card">
            <h3 />
            <h6>Temp: C</h6>
            <h6>Wind: M/S</h6>
            <h6>Humidity: %</h6>
          </li>
          <li className="card">
            <h3 />
            <h6>Temp: C</h6>
            <h6>Wind: M/S</h6>
            <h6>Humidity: %</h6>
          </li>
          <li className="card">
            <h3 />
            <h6>Temp: C</h6>
            <h6>Wind: M/S</h6>
            <h6>Humidity: %</h6>
          </li>
          <li className="card">
            <h3 />
            <h6>Temp: C</h6>
            <h6>Wind: M/S</h6>
            <h6>Humidity: %</h6>
          </li>
          <li className="card">
            <h3 />
            <h6>Temp: C</h6>
            <h6>Wind: M/S</h6>
            <h6>Humidity: %</h6>
          </li>
        </ul>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Weather
