const API_KEY = '115f06c9cb74251853d88e3df0fd0b36'; 
export const API_CALL = (CITY_ID) => {
  return `http://api.openweathermap.org/data/2.5/forecast?q=${CITY_ID}&APPID=${API_KEY}`
}

