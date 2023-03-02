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
    <>
      {forecast.list.splice(0, 7).map((item, index) => (
        <div className="day" key={index}>
          <div className="heading-temp-container">
            <p className="day-heading">
              {forecastDays[index].substring(0, 3).toUpperCase()}
            </p>
            <p className="day-temp">{Math.round(item.main.temp)}°C</p>
          </div>
          <img
            src={`icons/${item.weather[0].icon}.png`}
            alt=""
            className="day-icon"
          />
        </div>
      ))}
    </>
  );
};

export default Forecast;
