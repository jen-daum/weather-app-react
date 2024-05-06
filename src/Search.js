// Search.js
import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [city, setCity] = useState(""); // State to hold the entered city

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    onSearch(city); // Call the onSearch function passed from parent component with the entered city
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state as the user types
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
