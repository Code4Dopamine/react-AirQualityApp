import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className=''>Vite + React</h1>
      <div className="card">
        <button className="bg-indigo-500 p-2 rounded-full text-white active:bg-red-300 active:text-black focus:ring-4 focus:ring-lime-600" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <span className='fi fi-jp fis bg-indigo-500 w-full'></span> */}
      <img
        src="https://flagcdn.com/za.svg"
        width="16"
        alt="South Africa"></img>

    </>
  )
}

export default App
