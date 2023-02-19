import React from "react";

const LocalWeather = ({ localWeather }) => {
  const localSunrise = localWeather.sys.sunrise;
  const localSunset = localWeather.sys.sunset;

  const localSunriseFormat = new Date(localSunrise * 1000);
  const localSunsetFormat = new Date(localSunset * 1000);

  return (
    <div className="current-weather">
      <div className="header">
        <h1 className="city">{localWeather.name}</h1>
      </div>
      <div className="image-container">
        <img
          className="weather-image"
          src={`icons/${localWeather.weather[0].icon}.png`}
          alt=""
        />
        <p className="description">{localWeather.weather[0].main}</p>
      </div>
      <div className="info-container">
        <p className="temperature">{Math.round(localWeather.main.temp)}°C</p>
        <div className="details-container">
          <div className="details-inner-container">
            <img className="details-image" src="icons/wind.svg" alt="" />
            <p className="wind">{Math.round(localWeather.wind.speed)} m/s</p>
          </div>
          <div className="details-inner-container">
            <img className="details-image" src="icons/pressure.svg" alt="" />
            <p className="pressure">{localWeather.main.pressure} hPa</p>
          </div>
          <div className="details-inner-container">
            <img className="details-image" src="icons/humidity.svg" alt="" />
            <p className="humidity">{localWeather.main.humidity}%</p>
          </div>
        </div>
      </div>
      <div className="additional-info-container">
        <p className="additional-temp">
          Feels like: {Math.round(localWeather.main.feels_like)}°C
        </p>
        <p className="sunrise">
          Sunrise:{" "}
          {localSunriseFormat.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="sunset">
          Sunset:{" "}
          {localSunsetFormat.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default LocalWeather;
