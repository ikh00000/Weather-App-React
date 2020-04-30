import {createSelector} from 'reselect';

const getWeather = (state) => {
  console.log('getWeather', state.weather);
  return state.weather;
}

export const getWeatherSelector = createSelector(getWeather, (weather)=>{
  console.log('getWeatherSelector', weather);
  return weather;
})

