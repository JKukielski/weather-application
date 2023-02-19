import React from "react";
import "../styles/currentWeather.css";

const CurrentWeather = ({ currentWeather }) => {
  const sunrise = currentWeather.sys.sunrise;
  const sunset = currentWeather.sys.sunset;

  const sunriseFormat = new Date(sunrise * 1000);
  const sunsetFormat = new Date(sunset * 1000);

  return (
    <div className="current-weather">
      <div className="header">
        <h1 className="city">{currentWeather.name}</h1>
      </div>
      <div className="image-container">
        <img
          className="weather-image"
          src={`icons/${currentWeather.weather[0].icon}.png`}
          alt=""
        />
        <p className="description">{currentWeather.weather[0].main}</p>
      </div>
      <div className="info-container">
        <p className="temperature">{Math.round(currentWeather.main.temp)}°C</p>
        <div className="details-container">
          <div className="details-inner-container">
            <img className="details-image" src="icons/wind.svg" alt="" />
            <p className="wind">{Math.round(currentWeather.wind.speed)} m/s</p>
          </div>
          <div className="details-inner-container">
            <img className="details-image" src="icons/pressure.svg" alt="" />
            <p className="pressure">{currentWeather.main.pressure} hPa</p>
          </div>
          <div className="details-inner-container">
            <img className="details-image" src="icons/humidity.svg" alt="" />
            <p className="humidity">{currentWeather.main.humidity}%</p>
          </div>
        </div>
      </div>
      <div className="additional-info-container">
        <p className="additional-temp">
          Feels like: {Math.round(currentWeather.main.feels_like)}°C
        </p>
        <p className="sunrise">
          Sunrise:{" "}
          {sunriseFormat.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="sunset">
          Sunset:{" "}
          {sunsetFormat.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
