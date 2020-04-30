import React, { useState, useEffect } from 'react';
import {fetchWeather } from '../../redux/weather/weatherActions';
import {getWeatherSelector} from '../../selectors';
import {connect} from 'react-redux';

import ShowWeather from './ShowWeather';
import SearchWeatherForm from './SearchWeatherForm';

import './WeatherSearchAndShow.scss';

const WeatherSearchAndShow = ({weatherInfo, getWeather}) => {
  const [weather, setWeather ]= useState({
    city: undefined,
    country: undefined,
    temp: undefined,
    humidity: undefined,
    description: undefined,
    error: ""
  })
  
  useEffect(() => {
    if(weatherInfo.weather){
    setWeather({
      city: weatherInfo.weather.data.city.name,
      country: weatherInfo.weather.data.city.country,
      temp: weatherInfo.weather.data.list[0].main.temp,
      humidity: weatherInfo.weather.data.list[0].main.humidity,
      description: weatherInfo.weather.data.list[0].weather[0].description,
      error: ""
    });
  }
}, [weatherInfo.weather])

  return (
    <div className="WeatherSearchAndShow">
      <SearchWeatherForm getWeather={getWeather} />
      <ShowWeather checkFetching={weatherInfo.weather} weather={weather} />
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    weatherInfo: getWeatherSelector(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    getWeather: (e) => dispatch(fetchWeather(e))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherSearchAndShow);