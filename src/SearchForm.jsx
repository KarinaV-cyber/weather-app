import React from "react";

export default function SearchForm() {
  return (
    <form className="Search mb-3 mt-3 me-5 d-block">
      <div className="row g-2">
        <div className="col-9">
          <input
            type="text"
            className="viewBox border border-2 w-100"
            placeholder="Type a city..."
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            autoComplete="off"
            className="btn btn-primary w-100 viewBox"
          />
        </div>
      </div>
    </form>
  );
}
