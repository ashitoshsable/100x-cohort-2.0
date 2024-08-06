import { useContext } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { CountAtom, EvenSelector } from './store/atoms/count'

function App(){
  return(
    <>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </>
  )
}

function Count(){
  return(
    <>
      <CountRender/>
      <Button></Button>
    </>
  )
}

function CountRender(){
  const count=useRecoilValue(CountAtom);
  return(
    <h1>
      {count}
    </h1>
  )
}

function Button(){
  const setCount=useSetRecoilState(CountAtom);
  return (
    <>
      <button onClick={()=>{
        setCount(count=>count+1);
      }}>increment</button>
      <button onClick={()=>{
        setCount(count=>count-1);
      }}>decrement</button>
      <EvenRenderer></EvenRenderer>
    </>
  )
}

function EvenRenderer(){
  const even=useRecoilValue(EvenSelector);
  return(
    <h3>
    {even==0?"It is even":"It is odd"}
    </h3>
  )
}

//normal propdrilling method - anti pattern
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
