import React from "react";

export default function Search({ onSearch }) {
  return (
    <div className="search-bar">
      <form id="input-form">
        <input
          className="form-control"
          list="datalistOptions"
          id="DataList"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
          <option value="Current location"></option>
          <option value="New York"></option>
          <option value="Madrid"></option>
          <option value="Paris"></option>
          <option value="London"></option>
        </datalist>
      </form>
    </div>
  );
}
