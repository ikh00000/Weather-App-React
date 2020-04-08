import React from 'react';

function SearchWeatherForm({getWeather}) {
  return (
    <form onSubmit={getWeather} className="SearchWeatherForm">
        <input
          type="text"
          name="city"
          placeholder="City..."
        />
        <button
          type="submit"
        >
        Find
        </button>
      </form> 
  )
}

export default SearchWeatherForm;
