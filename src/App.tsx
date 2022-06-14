import { useState } from 'react'
import logo from './logo.svg'

function App():JSX.Element {
  const [count, setCount] = useState(0)
  const INCREMENT_BY_ONE=1
  const onHandleClick:React.MouseEventHandler<HTMLButtonElement>| undefined=()=>setCount((previousNumber)=>previousNumber+INCREMENT_BY_ONE)
  return (
    <div className="flex items-center justify-center">
      <header className="text-3xl font-bold">
        <img src={logo} className="w-16" alt="logo" />
        <p className='text-primary'>Hello Vite + React! + Optimization Test</p>
        <p>
          <button type="button" onClick={onHandleClick}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
