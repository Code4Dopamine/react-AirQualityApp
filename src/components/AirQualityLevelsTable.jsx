import React from 'react'

const AirQualityLevelsTable = () => {
  const levels = [
    { color: 'bg-emerald-100', range: '0 - 50', level: 'Good' },
    { color: 'bg-yellow-100', range: '51 - 100', level: 'Moderate' },
    { color: 'bg-orange-200', range: '101 - 150', level: 'Unhealthy for Sensitive Groups' },
    { color: 'bg-rose-200', range: '151 - 200', level: 'Unhealthy' },
    { color: 'bg-purple-100', range: '201 - 300', level: 'Very Unhealthy' },
    { color: 'bg-red-300', range: '301 and higher', level: 'Hazardous' },
  ];

  return (
    <div className='flex justify-center items-center'>
      <div className="border rounded-xl my-5 card sm:w-10/12">
        <div className='card-body'>
          <h3 className='card-title'>Air Quality Levels</h3>
          <div className="divider"></div>
          <table className="table bg-white">
            {/* head */}
            <thead>
              <tr>
                {/* <th></th> */}
                <th className='text-lg text-neutral-700 font-semibold pre-wrap'>AQI Range</th>
                <th className='text-lg text-neutral-700 text-center sm:text-left font-semibold whitespace-pre-wrap'> Level of Health Concern</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Row
                    <tr>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                    </tr> */}
              {levels.map((element, index) => (
                <tr key={index} className={`${element.color}`}>
                  <td className='w-1/3 sm:w-1/4'>{element.range}</td>
                  <td>{element.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <p>Data & API Source: <a href="https://aqicn.org/api/" className='text-blue-600 underline'>Worldwide Air Quality</a> </p>
        </div>
      </div>
    </div>
  )
}

export default AirQualityLevelsTable