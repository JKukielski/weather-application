import React from "react";
import "../styles/currentWeather.css";

const LocalWeather = ({ localWeather }) => {
  const localSunrise = localWeather.sys.sunrise;
  const localSunset = localWeather.sys.sunset;

  const localSunriseFormat = new Date(localSunrise * 1000);
  const localSunsetFormat = new Date(localSunset * 1000);

  return (
    <div className="outer-container">
      <div className="current-local-container">
        <h3 className="city">{localWeather.name}</h3>
        <div className="temp-icon-container">
          <h3 className="temp">{Math.round(localWeather.main.temp)}°C</h3>
          <img
            src={`icons/${localWeather.weather[0].icon}.png`}
            alt=""
            className="icon"
          />
        </div>
        <div className="details-container">
          <div className="details-container-one">
            <div className="details-inner-container">
              <img src="icons/wind.svg" alt="" className="details-icon" />
              <p className="detail">
                {Math.round(localWeather.wind.speed)} m/s
              </p>
            </div>
            <div className="details-inner-container">
              <img src="icons/pressure.svg" alt="" className="details-icon" />
              <p className="detail">
                {Math.round(localWeather.main.pressure)} hPa
              </p>
            </div>
            <div className="details-inner-container">
              <img src="icons/humidity.svg" alt="" className="details-icon" />
              <p className="detail">
                {Math.round(localWeather.main.humidity)}%
              </p>
            </div>
          </div>
          <div className="details-container-two">
            <p className="detail">
              Feels like: {Math.round(localWeather.main.feels_like)}°C
            </p>
            <p className="detail">
              Sunrise:{" "}
              {localSunriseFormat.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="detail">
              Sunset:{" "}
              {localSunsetFormat.toLocaleTimeString("en-US", {
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

export default LocalWeather;
