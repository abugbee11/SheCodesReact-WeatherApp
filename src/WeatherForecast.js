import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
  }

  if (loaded) {
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
  } else {
    let apiKey = "0b3e84o47fbcat613600bf4527c3e4e0";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
