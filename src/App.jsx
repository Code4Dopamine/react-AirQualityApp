import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CitySearch from './components/CitySearch'
import AirQualityCard from './components/AirQualityCard'
import PollutantInfo from './components/PollutantInfo'
import AirQualityLevelsTable from './components/AirQualityLevelsTable'
// require('dotenv').config()

function App() {
  // const temp = getAirQuality("Toronto")
  const temp = import.meta.env.VITE_API_KEY
  const [airQualityData, setAirQualityData] = useState(null)
  const [error, setError] = useState(null)

  const getAirQuality = async (city) => {
    try {
      const response = await fetch(`http://api.waqi.info/feed/${city}/?token=${import.meta.env.VITE_API_KEY}`)

      const data = await response.json()
      console.log(data)

      if (response.ok && data.status === 'ok') {
        setAirQualityData(data.data)
        setError(null)
      } else {
        setError("Can't find city. Try another location or check if city name is correct")
        setAirQualityData(null)
      }

    } catch (error) {
      console.error("Error: ", error)
      setError("Sorry, something went wrong...")
    }
  }

  return (
    <>
      <div className='min-h-screen p-10'>
        <h1 className='text-4xl font-semibold'>Air Quality Index Checker</h1>

        {/* Search Component */}
        <CitySearch getAirQuality={getAirQuality} />

        {error && (
          <div className='card flex items-center justify-center bg-slate-200 h-20' role='alert'>
            {error}
          </div>
        )}
        {
          airQualityData ?
            (<>
              {/* Air Quality Card Component */}
              <AirQualityCard data={airQualityData} />
              {/* Pollutant Info Card  */}
              <PollutantInfo pollutant={airQualityData.dominentpol} />
            </>) :
            (error ?
              (<>
              </>) :
              (<>
                <div className="card flex items-center justify-center bg-slate-200 h-20">
                  <p>Type in a city name above to show Air Quality Info</p>
                </div>
              </>))
        }

        {/* Previous Code */}

        {/* Air Quality Level - Table Component */}
        <AirQualityLevelsTable />

      </div>
    </>
  )
}

export default App
