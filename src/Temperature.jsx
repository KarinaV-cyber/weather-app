import React from "react";

export default function Temperature() {
  return (
    <div className="row align-items-center">
      <div className="col-6 d-flex align-items-center gap-2 weather-temperature">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="cloudy"
          className="float-start"
        />
        <strong>19 </strong>
        <span className="units">
          <a href="/" className="text-decoration-none">
            °C
          </a>
          {" | "}
          <a href="/" className="text-decoration-none">
            °F
          </a>
        </span>
      </div>
    </div>
  );
}
