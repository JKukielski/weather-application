import React from "react";
import "../styles/currentWeather.css";

const CurrentWeather = ({ currentWeather }) => {
  const sunrise = currentWeather.sys.sunrise;
  const sunset = currentWeather.sys.sunset;

  const sunriseFormat = new Date(sunrise * 1000);
  const sunsetFormat = new Date(sunset * 1000);

  return (
    <div className="outer-container">
      <div className="current-local-container">
        <h3 className="city">{currentWeather.name}</h3>
        <div className="temp-icon-container">
          <h3 className="temp">{Math.round(currentWeather.main.temp)}°C</h3>
          <img
            src={`icons/${currentWeather.weather[0].icon}.png`}
            alt=""
            className="icon"
          />
        </div>
        <div className="details-container">
          <div className="details-container-one">
            <div className="details-inner-container">
              <img src="icons/wind.svg" alt="" className="details-icon" />
              <p className="detail">
                {Math.round(currentWeather.wind.speed)} m/s
              </p>
            </div>
            <div className="details-inner-container">
              <img src="icons/pressure.svg" alt="" className="details-icon" />
              <p className="detail">
                {Math.round(currentWeather.main.pressure)} m/s
              </p>
            </div>
            <div className="details-inner-container">
              <img src="icons/humidity.svg" alt="" className="details-icon" />
              <p className="detail">
                {Math.round(currentWeather.main.humidity)} m/s
              </p>
            </div>
          </div>
          <div className="details-container-two">
            <p className="detail">
              Feels like: {Math.round(currentWeather.main.feels_like)}°C
            </p>
            <p className="detail">
              Sunrise:{" "}
              {sunriseFormat.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="detail">
              Sunset:{" "}
              {sunsetFormat.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
