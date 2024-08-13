import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useHelp(){
  const [count, setCount] = useState(0);
  const inc = () => setCount(count=>count+1);
  return [count,inc];
}

function App() {
  const [count,inc]=useHelp();

  return (
    <>
      <h3>{count}</h3>
      <button onClick={inc}>Click Me!</button>
    </>
  )
}

export default App
