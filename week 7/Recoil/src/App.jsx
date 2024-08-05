import { useContext, useState } from 'react'
import './App.css'
import { ContextCount } from './context';

//normal propdrilling method - anti pattern

function App(){
  const[count,setCount]=useState(0);
  return(
    <>
      <ContextCount.Provider value={count}>
        <Count setCount={setCount}></Count>
      </ContextCount.Provider>
    </>
  )
}

function Count({setCount}){
  return(
    <>
      <CountRender/>
      <Button setCount={setCount}></Button>
    </>
  )
}

function CountRender(){
  const count=useContext(ContextCount);
  return(
    <h1>
      {count}
    </h1>
  )
}

function Button({setCount}){
  const count=useContext(ContextCount);
  return (
    <>
      <button onClick={()=>{
        setCount(count+1);
      }}>increment</button>
      <button onClick={()=>{
        setCount(count-1);
      }}>decrement</button>
    </>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Count count={count} setCount={setCount}></Count>
      
//     </>
//   )
// }

// function Count({count,setCount}){
//   return(
//     <>
//       <h1>
//         {count}
//       </h1>
//       <Button count={count} setCount={setCount}></Button>
//     </>
//   )
// }

// function Button({count, setCount}){
//   return(
//     <>
//       <button onClick={()=>{
//         setCount(count+1);
//       }}>increase</button>
//       <button onClick={()=>{
//         setCount(count-1);
//       }}>decrease</button>
//     </>
//   )
// }

export default App
