import { useMemo } from "react";
import { useState } from "react"

function App() {
  const [count,setCount]=useState(0);
  const [n,setN]=useState(0);

  //optimal way     
  let res = useMemo(()=>{
    let res=0;
    for(let i=1;i<=n;i++){
      res+=i;
    }
    return res;
  },[n])

  return (
    <>
      <input type="text" placeholder="Type a number" onChange={t=>setN(t.target.value)}/><br></br>
      The sum is {res}<br></br>
      <button onClick={()=>setCount(count+1)}>Counter {count}</button>
    </>
  )
}

export default App



//Traditional Way
// import { useState } from "react"

// function App() {
//   const [count,setCount]=useState(0);
//   const [n,setN]=useState(0);

//   let res=0;
//   for(let i=1;i<=n;i++){
//     res+=i;
//   }

//   return (
//     <>
//       <input type="text" placeholder="Type a number" onChange={t=>setN(t.target.value)}/><br></br>
//       The sum is {res}<br></br>
//       <button onClick={()=>setCount(count+1)}>Counter {count}</button>
//     </>
//   )
// }

// export default App
