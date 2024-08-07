import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-10 md:col-span-4'>Red Box</div>
        <div className='bg-blue-500 col-span-10 md:col-span-4'>Blue Box</div>
        <div className='bg-green-500 col-span-10 md:col-span-2'>Green Box</div>
      </div>
    </>
  )
}

export default App
