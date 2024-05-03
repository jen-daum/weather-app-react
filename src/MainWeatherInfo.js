import React from "react";
import TempToggle from "./TempToggle";

export default function MainWeatherInfo({ data }) {
  return (
    <div className="weather-info">
      <div className="row today-data">
        <div className="col today-date" id="today-date">
          {data.date}
        </div>
        <div className="col-span-2">
          <img src={data.iconUrl} id="today-icon" />
        </div>
        <div className="col today-humidity-wind">
          <ul>
            <li>
              Humidity:{" "}
              <span id="humidity" className="humidity-score">
                {data.humidity}%
              </span>
            </li>
            <li>
              Wind:{" "}
              <span id="wind" className="wind-score">
                {data.windSpeed} km/h
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row main-temp-block">
        <span id="mainTemp" className="col text-end main-temp">
          {data.dayTemp}°
        </span>
        <span className="col text-start units">
          <TempToggle />
        </span>
      </div>
      <div className="row min-max-container">
        <span id="min-temp">{data.minTemp}°</span>
        <span id="max-temp">{data.maxTemp}°</span>
      </div>
      <div className="row sentence-weather">{data.description}</div>
    </div>
  );
}
