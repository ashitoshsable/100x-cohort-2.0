import { useCallback } from "react";
import { useState } from "react"
import { memo } from 'react';



function App() {
  const [count,setCount]=useState(0);

  const func = useCallback(()=>{
    console.log("Hi There");
  },[])
  
  return (
    <>
     <Temp pass={func}/><br></br>
     <button onClick={() => setCount(count+1)}>counter {count}</button>
    </>
  )
}

const Temp=memo(function({func}){
  console.log("Hit");
  return<>
    <button>First Button</button>
  </>
})

export default App;
