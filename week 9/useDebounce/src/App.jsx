import { useState } from 'react'
import './App.css'
import { useInterval } from './hooks/useIntervalHook';
import { useDebounce } from './hooks/useDebounceHook';

function App() {
  const [count, setCount]=useState(0);
  const [value, setValue]=useState("");
  const debounceValue=useDebounce(value,500);

  useInterval(()=>{
    setCount(count=>count+1);
  },1000);
  return (
    <>
      <h3>The count is {count}</h3>
      <input type="text" placeholder='Type something...' onChange={
        (e)=>{
          setValue(e.target.value);
        }
      }/>
      <h3>The Debounced value is {debounceValue}</h3>
    </>
  )
}

export default App
