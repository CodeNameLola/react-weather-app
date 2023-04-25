import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">
              {forecast[0].temperature.day}
            </div>
            <div className="WeatherForecast-icon">
              {forecast[0].condition.icon}
            </div>
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[0].temperature.maximum)}˚
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[0].temperature.minimum)}˚
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `20a7b4d455458e7ffo4952342tabf625`;
    let longitude = props.coord.longitude;
    let latitude = props.coord.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
