import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "0b3e84o47fbcat613600bf4527c3e4e0";
  let city = "Boston";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weather-forecast">
      <div className="row justify-content-center">
        <div className="col-2">
          <div className="WeatherForecastDay">Mon</div>
          <div className="forecast-image">
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
