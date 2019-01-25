import "./WeatherDisplay.css";
import React from "react";
import ReactDom from "react-dom";

const weatherConfig = {
  summer: {
    text: "It's summetime!",
    icon: "sun"
  },
  winter: {
    text: "It's cold!",
    icon: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const WeatherDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = weatherConfig[season];
  console.log(props.lat);
  return (
    <div className={`weather-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default WeatherDisplay;
