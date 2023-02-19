import { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import { GEO_API_URL, WEATHER_API_KEY, WEATHER_API_URL } from "./api/api";
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
          `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
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
        `${GEO_API_URL}/direct?q=${location}&limit=1&appid=${WEATHER_API_KEY}`
      );

      const locationJSON = await locationFetch.json();

      const latitude = locationJSON[0].lat;
      const longitude = locationJSON[0].lon;

      const weatherFetch = await fetch(
        `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
      );

      const weatherJSON = await weatherFetch.json();

      const ForecastFetch = await fetch(
        `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
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
      <div className="inner-container">
        <div className="current-weather-container">
          <div className="small-inner-container">
            <h1 className="current-weather-heading">
              Current weather in your location:
            </h1>
            {localWeather && <LocalWeather localWeather={localWeather} />}
          </div>
          <div className="small-inner-container">
            <h1 className="current-weather-heading">
              {currentWeather && `Current weather in ${currentWeather.name}:`}
            </h1>
            {currentWeather && (
              <CurrentWeather currentWeather={currentWeather} />
            )}
          </div>
        </div>
        <div className="forecast-container">
          {forecast && <Forecast forecast={forecast} />}
        </div>
      </div>
    </div>
  );
}

export default App;
