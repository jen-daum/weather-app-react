import React from "react";

export default function WeeklyWeatherInfo({ data }) {
  // Function to generate forecast items from forecast data
  function generateForecastItems(forecastData) {
    let forecastItems = [];
    if (!Array.isArray(forecastData)) {
      // Check if forecastData is definitely an array
      return forecastItems; // Return empty array if not
    }
    for (let dayData of forecastData) {
      forecastItems.push(
        <div key={dayData.date} className="col-2">
          <ul>
            <li className="next-day-day">{dayData.day}</li>
            <li className="next-day-icon">
              <img src={dayData.iconUrl} alt="Forecast icon" width="45" />
            </li>
            <li className="next-day-date">{dayData.date}</li>
          </ul>
        </div>
      );
    }
    return forecastItems;
  }

  const forecastItems = generateForecastItems(data);

  return (
    <div id="forecast" className="row">
      {forecastItems}
    </div>
  );
}
