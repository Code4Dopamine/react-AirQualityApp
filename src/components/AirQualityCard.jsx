// import React from 'react'
const getCardColor = (aqi) => {
    // AQI Color coding based on https://waqi.info/
    if (aqi <= 50) {
        // Good
        // return 'bg-success text-white';
        return 'bg-emerald-700 text-white';
    } else if (aqi <= 100) {
        // Moderate
        return 'bg-yellow-500';
    } else if (aqi <= 150) {
        //Unhealthy for Sensitive group
        return 'bg-amber-600';
    } else if (aqi <= 200) {
        //Unhealthy
        return 'bg-rose-700 text-white';
    } else if (aqi <= 300) {
        //Very Unhealthy
        return 'bg-purple-700 text-white';
    } else {
        return 'bg-red-900 text-white';
    }
}

const AirQualityCard = ({ data }) => {
    const { aqi, city, dominentpol, time } = data
    const color = getCardColor(aqi)
    //Color Test
    // const color = getCardColor(200)

    return (
        <>
            {/* Color Test */}
            {/* <div>
                <button className={`button ${getCardColor(50)}`}>Good</button>
                <button className={`button ${getCardColor(100)}`}>Moderate</button>
                <button className={`button ${getCardColor(150)}`}>Unhealthy(s)</button>
                <button className={`button ${getCardColor(200)}`}>Unhealthy</button>
                <button className={`button ${getCardColor(300)}`}>Very UnHealthy</button>
                <button className={`button ${getCardColor(350)}`}>Hazardous</button>
            </div> */}
            {/* <div className={`p-5 border rounded-xl my-2 `}> */}
            <div className={`card shadow-xl ${color}`}>
                <div className="card-body">
                    <h5 className="card-title">{city.name}</h5>
                    <h6 className="">Air Quality Index: {aqi}</h6>
                    <p>Dominant Pollutant: {dominentpol}</p>
                    <p>Last Updated: {time.s}</p>
                </div>
            </div>
            {/* </div> */}
            {/* <div className="card shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default AirQualityCard