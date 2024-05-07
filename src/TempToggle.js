// TempToggle.js
import React from "react";

export default function TempToggle({ unit, onToggle }) {
  const handleToggle = (targetUnit) => {
    if (targetUnit !== unit) {
      onToggle(targetUnit);
    }
  };

  //const convertToFahrenheit = (celsius) => {
  // return (celsius * 9) / 5 + 32;
  // }; TODO

  return (
    <div className="units">
      <span
        className={unit === "C" ? "lightened-units" : "darkened-units"}
        onClick={() => handleToggle("C")}
      >
        °C
      </span>{" "}
      |
      <span
        className={unit === "F" ? "lightened-units" : "darkened-units"}
        onClick={() => handleToggle("F")}
      >
        °F
      </span>
    </div>
  );
}
