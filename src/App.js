import { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import LocalWeather from "./components/LocalWeather";

function App() {
  const [location, setLocation] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [localWeather, setLocalWeather] = useState(null);

  useEffect(() => {
    const fetchLocalWeather = async () => {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const { latitude, longitude } = position.coords;
        const weatherResponse = await fetch(
          `${process.env.REACT_APP_WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        const weatherData = await weatherResponse.json();
        setLocalWeather(weatherData);
      });
    };

    fetchLocalWeather();
  }, []);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const locationFetch = await fetch(
        `${process.env.REACT_APP_GEO_API_URL}/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      const locationJSON = await locationFetch.json();

      const latitude = locationJSON[0].lat;
      const longitude = locationJSON[0].lon;

      const weatherFetch = await fetch(
        `${process.env.REACT_APP_WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );

      const weatherJSON = await weatherFetch.json();

      const ForecastFetch = await fetch(
        `${process.env.REACT_APP_WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );

      const forecastJSON = await ForecastFetch.json();

      setCurrentWeather(weatherJSON);
      setForecast(forecastJSON);
      setLocation("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Search
        handleLocationChange={handleLocationChange}
        handleSubmit={handleSubmit}
        location={location}
      />
      <div className="current-weather-container">
        {localWeather && <LocalWeather localWeather={localWeather} />}
        {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      </div>

      <div className="forecast">
        {forecast && <Forecast forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
