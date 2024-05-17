

import React,{useState} from 'react'

function Weather() {

    const api={
        key:'071d84434570415379cb5d58621f038c',
        base:'https://api.openweathermap.org/data/2.5/',
    }
    
    const [search,setSearch]=useState("")
    const [weather,setWeather]=useState({})
    const [error, setError] = useState('');
    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&&APPID=${api.key}`)
          .then((res) => res.json())
          .then((result) => {
            if (result.cod === "404") {
              // Handle not found error
              setError('City not found !');
              console.error("City not found");
            } else {
              console.log(result);
              setError('');
              setWeather(result);
            }
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
          });
      };

      console.log('weatherrrr',weather);
  return (
  
     
    <div className='App w-full min-h-screen flex items-center justify-center bg-yellow-200 border-2 border-black'>
    <div className='WrapperDiv flex flex-col items-center'>
      <h1 className='text-2xl font-serif mb-10'>Search the place to see the Weather</h1>
      <div className='flex flex-wrap mb-4'>
        {/* Search Box */}
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => setSearch(e.target.value)}
          className='h-10 bg-gray-800 text-white border border-gray-600 rounded-l-md px-4'
        />
        <button
          onClick={searchPressed}
          className='bg-gray-800 text-white rounded-r-md px-4 py-2 pl-1'
        >
          Search
        </button>
      </div>
      {error && <div className='bg-red-500 text-white p-2 rounded mb-4'>{error}</div>}
      {!error && weather.name && (
          <div className='bg-blue-300 rounded-md p-4'>
            <div className='bg-white p-2 mb-2 rounded-md'>
              <strong>Location:</strong> {weather.name}
            </div>
            <div className='bg-white p-2 mb-2 rounded-md'>
              <strong>Temperature:</strong> {weather.main.temp}°C
            </div>
            <div className='bg-white p-2 mb-2 rounded-md'>
              <strong>Humidity:</strong> {weather.main.humidity}%
            </div>
            <div className='bg-white p-2 mb-2 rounded-md'>
              <strong>Description:</strong> {weather.weather[0].description}
            </div>
            <div className='bg-white p-2 mb-2 rounded-md'>
            <strong>Condition:</strong> {weather.weather[0].main}
            </div>
          </div>
        )}
    </div>
  </div>
 
 
      
     
    
  )
}

export default Weather
