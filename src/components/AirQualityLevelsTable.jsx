import React from 'react'

const AirQualityLevelsTable = () => {
  const levels = [
    { range: '0 - 50', level: 'Good'},
    { range: '51 - 100', level: 'Moderate'},
    { range: '101 - 150', level: 'Unhealthy for Sensitive Groups'},
    { range: '151 - 200', level: 'Unhealthy'},
    { range: '201 - 300', level: 'Very Unhealthy'},
    { range: '301 and higher', level: 'Hazardous'},
  ];

  return (
    <div className="border rounded-xl my-5 card">

      <div className='card-body'>
        <h3 className='card-title'>Air Quality Levels</h3>
            <table className="table table-zebra table-">
              {/* head */}
              <thead>
                <tr>
                  {/* <th></th> */}
                  <th className='text-lg text-neutral-700 font-semibold'>AQI Range</th>
                  <th className='text-lg text-neutral-700 font-semibold whitespace-pre-wrap'> Level of Health Concern</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Row
                <tr>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                </tr> */}
                {levels.map((element,index) => (
                  <tr key={index}>
                    <td>{element.range}</td>
                    <td>{element.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
        </div>
  )
}

export default AirQualityLevelsTable