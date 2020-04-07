import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from './weatherTypes';


const initialState ={
    loading: false,
    weather: undefined,
    error: undefined
}

const weatherReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_WEATHER_REQUEST: return{
      ...state,
      loading: true
    };
    case FETCH_WEATHER_SUCCESS: return{
      ...state,
      loading: false,
      weather: action.payload,
      error: undefined
    };
    case FETCH_WEATHER_FAILURE: return {
      ...state,
      loading: false,
      weather: undefined,
      error: action.payload,
    };
    default: return state
  }
}

export default weatherReducer;