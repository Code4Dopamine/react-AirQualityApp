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
        <form onSubmit={handleSearch} className='m-5'>
            <input
                type="text"
                className="border rounded-lg"
                placeholder="Type in a City..."
                name="search"
                onChange={handleInputChange}>
            </input>
            <button
                className='rounded-lg bg-blue-600 py-1 px-3 text-white'
                type='submit'>
                Submit
            </button>
        </form>
    )
}

export default CitySearch