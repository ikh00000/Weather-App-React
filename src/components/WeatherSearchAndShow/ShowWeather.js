import React from 'react';
import './ShowWeather.scss';


const ShowWeather = ({checkFetching, weather}) => {
  
  console.log('weather show', weather);
  console.log('checkFetching show', checkFetching);

  const calvinToCelsium = (tempInCal) => {
    const tempInCel = tempInCal - 273.15;
    return tempInCel.toFixed(2);
  }

  return (
    <div className="ShowWeather">
       {
        checkFetching
        ?<div className="result">
        {weather.city && weather.country && <div><p >Location: </p><p>{weather.city}, {weather.country}</p></div>}
        {weather.temp && <div><p >Temperature: </p><p>{calvinToCelsium(weather.temp)} °C</p></div>}
        {weather.humidity && <div><p >Humidity: </p><p>{weather.humidity} %</p></div>}
        {weather.description && <div><p >Description: </p><p>{weather.description}</p></div>}
        {weather.error && <div><p >error: </p><p>{weather.error}</p></div>}
        </div>
        :<p className="init-text">Please, enter the city above</p>
      } 
    </div>
  )
}
export default ShowWeather;
