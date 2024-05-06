// MainWeatherInfo.js
import React from "react";
import moment from "moment";
import TempToggle from "./TempToggle";

export default function MainWeatherInfo({ data }) {
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
          {Math.round(data.temperature.day)}°
        </span>
        {/* Pass temperature unit and onToggle function to TempToggle */}
        <span className="col text-start units">
          <TempToggle unit="C" onToggle={() => {}} />
        </span>
      </div>
      {/* Display min and max temperature */}
      <div className="row min-max-container">
        <span id="min-temp">{Math.round(data.temperature.minimum)}°C</span>
        <span id="max-temp">{Math.round(data.temperature.maximum)}°C</span>
      </div>
      {/* Display weather description */}
      <div className="row sentence-weather">{data.condition.description}</div>
    </div>
  );
}
