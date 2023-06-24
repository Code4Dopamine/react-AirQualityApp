import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CitySearch from './components/CitySearch'
import AirQualityCard from './components/AirQualityCard'
// require('dotenv').config()



// console.log(getAirQuality("Toronto"))

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
      //set error state
      // set air quality data to null
    }
  }

  return (
    <>
      <div className='bg-slate-300 h-screen pt-10 px-10'>
        <h1 className='text-4xl font-semibold'>Air Quality Index Checker</h1>


        {/* Search Component */}
        <CitySearch getAirQuality={getAirQuality} />

        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}
        {airQualityData && (
          <>
            {/* Air Quality Card Component */}
            <AirQualityCard data={airQualityData} />
          </>
        )}


        {/* Card Design */}
        {/* <div className="border w-2/3 mx-5">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur libero quaerat nostrum sit aut expedita doloremque, ut ea repudiandae!
          </p>
        </div>
        <div>
          <p>
            {temp}
          </p>
        </div> */}

        {/* Table Component */}
        <div className="border rounded-xl my-5">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>



      </div>
    </>
  )
}

export default App
