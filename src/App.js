import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import Weather from './components/Weather'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const App = () => {
  const [search, setSearch] = useState("cairo")
  const [weather, setWeather] = useState(null)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['weather', search],
    queryFn: async () => {
      if (!search) return null; // Avoid fetching if search is empty

      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=20fecbb5864c86bfc87fa83058426c29`);
        setWeather(res.data)
        return res.data;
      } catch (error) {
        console.error('API Error:', error);
        throw new Error(error.message)
      }
    },
    enabled: !!search // Only run the query if `search` is not empty
  });

  console.log(weather);
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ backgroundColor: "navy", borderRadius: "10px", width: "30%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        <h1 style={{ color: "white", fontFamily: "cursive" }}>Weather App</h1>
        <Search search={search} setSearch={setSearch} />
        <Weather isLoading={isLoading} weather={weather} />
      </div>
    </div>
  )
}

export default App