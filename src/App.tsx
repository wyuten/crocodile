import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      "deviceorientation",
      (event) => {
        const rotateDegrees = event.alpha; // alpha: rotation around z-axis
        const leftToRight = event.gamma; // gamma: left to right
        const frontToBack = event.beta; // beta: front back motion
  
        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
      },
      true
    );
  }

  alert(`window.DeviceOrientationEvent: ${window.DeviceOrientationEvent}`)
  
  const handleOrientationEvent = (frontToBack: number | null, leftToRight: number | null, rotateDegrees: number | null) => {
    alert(`frontToBack: ${frontToBack}, leftToRight: ${leftToRight}, rotateDegrees: ${rotateDegrees}`)
  };

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
