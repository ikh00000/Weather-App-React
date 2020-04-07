import React from 'react';


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
        ?<div>
        {weather.city && weather.country && <p>Location: {weather.city}, {weather.country}</p>}
        {weather.temp && <p>Temperature: {calvinToCelsium(weather.temp)}</p>}
        {weather.humidity && <p>Humidity: {weather.humidity}</p>}
        {weather.description && <p>Description: {weather.description}</p>}
        {weather.error && <p>error: {weather.error}</p>}
        </div>
        :<p>Please, enter the city above</p>
      } 
    </div>
  )
}
export default ShowWeather;
