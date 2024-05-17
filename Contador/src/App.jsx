import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  function aumentar(){
    if(count == 0 && -200 || count < 200){
      setCount((count) => Math.min(count + 8, 200))
    }
  }

  function disminuir(){
    if(count == 0 && 200 || count > -200){
      setCount((count) => Math.max(count - 8, -200))
    }
  }

  function mas1(){
    if(count == 0 && -200 || count < 200 || count === 200){
      setCount((count) => Math.min(count + 1, 200))
    }
  }

  function menos1(){
    if(count == 0 && 200 || count > -200){
      setCount((count) => Math.max(count - 1, -200))
    }
  }

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
        <h3>
          count is {count}
        </h3>
        <button id='sumaB' onClick={()=> aumentar()}>+</button>
        <button id='restaB' onClick={()=> disminuir()}>-</button>
        <button id='sumaB1' onClick={()=> mas1()}>1</button>
        <button id='restaB1' onClick={()=> menos1()}>-1</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
