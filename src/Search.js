// Search.js
import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [city, setCity] = useState(""); // State to hold the entered city

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    onSearch(city); // Call the onSearch function passed from parent component with the entered city
    setCity(""); // Clear the city value after submission
  };

  return (
    <div className="row search-bar">
      <div className="col align-self-center">
        <form id="input-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="form-control"
              list="datalistOptions"
              id="DataList"
              placeholder="Type to search..."
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)} // Update city state as the user types
            />
            <datalist id="datalistOptions">
              <option id="currentLocation" value="Current location"></option>
              <option value="New York"></option>
              <option value="Madrid"></option>
              <option value="Paris"></option>
              <option value="London"></option>
            </datalist>
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
