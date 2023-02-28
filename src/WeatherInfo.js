import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <span>
            <WeatherIcon code={props.data.icon} size={70} />
          </span>
          <span className="weather-temperature">
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </span>
        </div>
        <div className="col-6">
          <div className="weather-details">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="weather-forecast">
        <WeatherForecast />
      </div>
    </div>
  );
}
