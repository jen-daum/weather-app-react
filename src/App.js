// App.js
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import Search from "./Search";
import MainWeatherInfo from "./MainWeatherInfo";
import Footer from "./Footer";
import WeeklyWeatherInfo from "./WeeklyWeatherInfo";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
      console.log("API URL:", apiUrl); // Print API call link
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Error fetching weather data. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Search onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weatherData && (
          <>
            <h1>
              {weatherData.city}, {weatherData.country}
            </h1>
            <MainWeatherInfo data={weatherData.daily[0]} />
            <div className="separator"></div>
            <WeeklyWeatherInfo data={weatherData.daily.slice(1, 6)} />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
