import { useState } from "react"; //hook

// let state={
//   count:0
// } //react doesn't watch this state

function App() {
  const [count,setCount]=useState(0); //now react is watching this state
  return (
    // <div>
    //   <button onClick={()=>{
    //     setCount(count+1)
    //   }}>counter {count}</button>
    // </div> //basic way

    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(elements){
  function iterator(){
    elements.setCount(elements.count+1);
  }
  return <button onClick={iterator}>count {elements.count}</button>
}

export default App
