import './App.css'
import { useOnline } from './hooks/useOnlineHook';



function App() {
  const online = useOnline();

  return (
    <>
      {online?<div>The user is online.</div>:<div>The user is offline.</div>}
    </>
  )
}

export default App
