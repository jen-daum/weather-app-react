// TempToggle.js
import React from "react";

export default function TempToggle({ unit, onToggle }) {
  return (
    <div className="units">
      <span
        className={unit === "C" ? "lightened-units" : "darkened-units"}
        onClick={() => onToggle("C")}
      >
        °C
      </span>{" "}
      |
      <span
        className={unit === "F" ? "lightened-units" : "darkened-units"}
        onClick={() => onToggle("F")}
      >
        °F
      </span>
    </div>
  );
}
