import React from "react";

export default function WeatherIcon(props) {
  return (
    <img
      src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
      alt={props.alt}
    />
  );
}
