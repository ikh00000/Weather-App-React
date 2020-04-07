import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from './weatherTypes';
import Axios from 'axios';

import {API_CALL} from '../../components/WeatherSearchAndShow/keys';

export const fetchWeatherRequest = () => {
  return{
    type: FETCH_WEATHER_REQUEST
  }
}

export const fetchWeatherSuccess = (weather) => {
  return{
    type: FETCH_WEATHER_SUCCESS,
    payload: weather
  }
}

export const fetchWeatherFailure = (error) => {
  return{
    type: FETCH_WEATHER_FAILURE,
    payload: error
  }
}

export const fetchWeather = (e) => {
  return async(dispatch) => {
    dispatch(fetchWeatherRequest);
    console.log("fetchWeatherRequest", fetchWeatherRequest); //check fetchWeatherRequest 
    try{
      e.preventDefault();
      const city = e.target.elements.city.value;//e.target.elements.city.value
      const api_call = await Axios.get(API_CALL(city));
      const weather = api_call;
      dispatch(fetchWeatherSuccess(weather));
      console.log("city", city); //check input 
      console.log("weather in action", weather); //check data 
    }catch(error){
      dispatch(fetchWeatherFailure(error));
      alert('City not found!')
    }
  }
}
