import './App.css'
import { useMousePointer } from './hooks/useMousePointer'

function App() {
  const positon=useMousePointer();
  return (
    <>
      <h2>{positon.x} {positon.y}</h2>
      <h4>The Mouse is pointed at</h4>
    </>
  )
}

export default App
