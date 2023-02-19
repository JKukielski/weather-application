import React from "react";
import "../styles/forecast.css";

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ forecast }) => {
  const sunrise = forecast.city.sunrise;
  const sunset = forecast.city.sunset;

  const sunriseFormat = new Date(sunrise * 1000);
  const sunsetFormat = new Date(sunset * 1000);

  const dayInWeek = new Date().getDay();

  const forecastDays = weekdays
    .slice(dayInWeek, weekdays.length)
    .concat(weekdays.slice(0, dayInWeek));

  return (
    <div className="forecast">
      <h1 className="forecast-heading">
        7-day forecast for {forecast.city.name}:
      </h1>
      {forecast.list.splice(0, 7).map((item, index) => (
        <div className="forecast-day" key={index}>
          <p className="day">{forecastDays[index]}</p>
          <div className="forecast-additional-info">
            <div className="additional-inner-container">
              <p className="min-max">Min: {Math.round(item.main.temp_min)}°C</p>
              <p className="min-max">Max: {Math.round(item.main.temp_max)}°C</p>
            </div>
            <div className="additional-inner-container">
              <p className="wind">Wind: {Math.round(item.wind.speed)}m/s</p>
              <p className="pressure">
                Pressure: {Math.round(item.main.pressure)} hPa
              </p>
            </div>
            <div className="additional-inner-container">
              <p className="humidity">
                Humidity: {Math.round(item.main.humidity)}%
              </p>
              <p className="feels-like">
                Feels like: {Math.round(item.main.feels_like)}°C
              </p>
            </div>
            <div className="additional-inner-container">
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
          <img
            className="forecast-image"
            src={`icons/${item.weather[0].icon}.png`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Forecast;
