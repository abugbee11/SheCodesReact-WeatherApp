import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div className="row justify-content-center">
        <div className="col-2">
          <div className="WeatherForecastDay">Mon</div>
          <div className="forcast-image">
            <WeatherIcon code="01n" size={40} />
          </div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">34°</span>
            <span className="weather-forecast-temperature-min">23°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
//This is just a placeholder component and isn't updated yet to work
