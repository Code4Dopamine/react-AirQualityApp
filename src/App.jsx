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
      const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${import.meta.env.VITE_API_KEY}`)

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
        <h1 className='text-4xl font-semibold sm:w-10/12'>Air Quality Index Checker</h1>

        {/* Search Component */}
        <CitySearch getAirQuality={getAirQuality} />

        {error && (
          <div className='flex items-center justify-center' role='alert'>
            <p className='card flex items-center justify-center w-10/12 p-5 h-auto text-center sm:w-auto sm:h-20 bg-slate-200 border-2 border-red-500'>{error}</p>
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
                {/* Placeholder */}
                <div className="flex items-center justify-center">
                  <p className='card flex items-center justify-center w-10/12 p-5 h-auto text-center sm:w-auto sm:h-20 bg-slate-200'>Type in a city name above to show Air Quality Info</p>
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
