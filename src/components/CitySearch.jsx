import { useState } from 'react'

const CitySearch = ({ getAirQuality }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleSearch = () => {
        event.preventDefault()
        //Replace " " with "-"
        const formattedCity = inputValue.replace(/ /g, '-')
        getAirQuality(formattedCity)
    }

    return (
        <form onSubmit={handleSearch} className='my-5 text-center'>
            <input
                type="text"
                className="border rounded-lg mx-2 p-1 w-10/12 sm:w-6/12"
                placeholder="Type in a City..."
                name="search"
                onChange={handleInputChange}
            >
            </input>
            <button
                className='rounded-lg bg-blue-600 m-2 p-2 text-white w-10/12 sm:w-auto'
                type='submit'>
                Submit
            </button>
        </form>
    )
}

export default CitySearch