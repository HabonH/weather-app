import React, { useState } from "react";
import axios from "axios";
import Data from "./Data"

const api = {
  key: "e6028f3402d03c87f8daded950fc66db",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App(props) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const onSearch = (event) => {
    if (event.key === "Enter") {
      axios
        .get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => {
          setWeather(response.data);
          setQuery("");
          console.log("Here-->", response.data.weather);
        });
    }
  };



  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={onSearch}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="weather-temp-container">
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
                <Data/>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
