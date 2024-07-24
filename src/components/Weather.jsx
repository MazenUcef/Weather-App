import React from 'react'

const Weather = ({ weather, isLoading }) => {
  const sunrise = new Date(weather?.sys?.sunrise * 1000)
  const sunset = new Date(weather?.sys?.sunset * 1000)
  const formatedSunrise = sunrise.toLocaleTimeString()
  const formatedSunset = sunset.toLocaleTimeString()

  if (isLoading) {
    return <h1 style={{ marginTop: "20px", color: "wheat" }}>Loading...</h1>
  }
  return (
    <div style={{ marginTop: "20px", color: "wheat", textAlign: "center" }}>
      <h1>{weather?.sys?.country}</h1>
      <h2>{weather?.name}</h2>
      <h3>Sunrise: {formatedSunrise}</h3>
      <h3>Sunset: {formatedSunset}</h3>
      <h3>Weather: {weather?.weather[0]?.main}</h3>
      <h3>Weather: {weather?.weather[0]?.description}</h3>
    </div>
  )
}

export default Weather