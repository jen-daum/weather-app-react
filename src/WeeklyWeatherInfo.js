import React from "react";
import moment from "moment";

export default function WeeklyWeatherInfo({ props }) {
  // Function to generate forecast items from forecast data
  function generateForecastItems() {
    let forecastItems = [];
    if (!Array.isArray(props)) {
      // Check if data is definitely an array
      return forecastItems; // Return empty array if not
    }
    for (let dayData of props) {
      // Extract necessary properties
      let { condition, time } = dayData;
      let date = moment(time * 1000).format("DD/MM");
      let day = moment(time * 1000).format("ddd");

      forecastItems.push(
        <div key={time} className="col-2">
          <ul>
            <li className="next-day-day">{day}</li>
            <li className="next-day-icon">
              <img src={condition.icon_url} alt="Forecast icon" width="45" />
            </li>
            <li className="next-day-date">{date}</li>
          </ul>
        </div>
      );
    }
    return forecastItems;
  }

  const forecastItems = generateForecastItems();

  return (
    <div id="forecast" className="row">
      {forecastItems}
    </div>
  );
}
