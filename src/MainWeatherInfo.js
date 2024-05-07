import React, { useState } from "react";
import moment from "moment";

export default function MainWeatherInfo({ data }) {
  const [unit, setUnit] = useState("C");

  // Function to convert temperature from Celsius to Fahrenheit
  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  // Function to handle temperature unit toggle
  const handleToggle = (targetUnit) => {
    setUnit(targetUnit);
  };

  // Function to get the temperature based on the selected unit
  const getTemperature = (celsius) => {
    return unit === "C"
      ? Math.round(celsius)
      : Math.round(convertToFahrenheit(celsius));
  };

  // Determine the color of the temperature links based on the selected unit
  const tempClassC = unit === "C" ? "lightened-units" : "darkened-units";
  const tempClassF = unit === "F" ? "lightened-units" : "darkened-units";

  return (
    <div className="weather-info">
      {/* Display current date and time */}
      <div className="row today-data">
        <div className="col today-date" id="today-date">
          {moment(data.time * 1000).format("dddd Do, MMMM HH:mm")}
        </div>
        <div className="col-span-2">
          {/* Display weather icon */}
          <img
            src={data.condition.icon_url}
            id="today-icon"
            alt="today weather icon"
          />
        </div>
        <div className="col today-humidity-wind">
          <ul>
            <li>
              Humidity: <span id="humidity">{data.temperature.humidity}%</span>
            </li>
            <li>
              Wind: <span id="wind">{data.wind.speed} km/h</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Display current temperature */}
      <div className="row main-temp-block">
        <span id="mainTemp" className="col text-end main-temp">
          {getTemperature(data.temperature.day)}°
        </span>
        {/* Toggle temperature unit */}
        <div className="col text-start units">
          <a href="#" className={tempClassC} onClick={() => handleToggle("C")}>
            °C
          </a>{" "}
          |{" "}
          <a href="#" className={tempClassF} onClick={() => handleToggle("F")}>
            °F
          </a>
        </div>
      </div>
      {/* Display min and max temperature */}
      <div className="row min-max-container">
        <span id="min-temp">{getTemperature(data.temperature.minimum)}°</span>
        <span id="max-temp">{getTemperature(data.temperature.maximum)}°</span>
      </div>
      {/* Display weather description */}
      <div className="row sentence-weather">{data.condition.description}</div>
    </div>
  );
}
