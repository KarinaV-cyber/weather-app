import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import Temperature from "./Temperature";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  // UI logic verified and committed locally

  return (
    <div className="app-container">
      <SearchForm />
      <WeatherInfo />
      <Temperature />
    </div>
  );
}
