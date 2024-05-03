import "./App.css";
import React from "react";
import Search from "./Search";
import MainWeatherInfo from "./MainWeatherInfo";
import Footer from "./Footer";
import WeeklyWeatherInfo from "./WeeklyWeatherInfo";

function App() {
  // Static weather data
  const weatherData = {
    date: "Thursday 03/05 11:26",
    city: "Bruxelles",
    dayTemp: 9,
    minTemp: 7,
    maxTemp: 12,
    humidity: 85,
    windSpeed: 20,
    description: "Rain and thunderstorms",
    iconUrl: "#", // Find random weather icon on website
  };

  // Static forecast data
  const forecastData = [
    {
      day: "Fri",
      date: "19/04",
      temp: 10,
      iconUrl: "#",
    },
    {
      day: "Sat",
      date: "20/04",
      temp: 11,
      iconUrl: "#",
    },
    {
      day: "Sun",
      date: "21/04",
      temp: 12,
      iconUrl: "#",
    },
    {
      day: "Mon",
      date: "22/04",
      temp: 13,
      iconUrl: "#",
    },
    {
      day: "Tue",
      date: "23/04",
      temp: 11,
      iconUrl: "#",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <Search />
        <h1>{weatherData.city}</h1>
        <MainWeatherInfo data={weatherData} />
        <div className="separator"></div>
        <WeeklyWeatherInfo data={forecastData} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
