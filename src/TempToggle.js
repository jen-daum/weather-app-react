import React from "react";

export default function TempToggle({ onToggle }) {
  return (
    <div className="units">
      <a href="#" className="lightened-units" onClick={() => onToggle("C")}>
        °C
      </a>{" "}
      |
      <a href="#" className="darkened-units" onClick={() => onToggle("F")}>
        °F
      </a>
    </div>
  );
}
