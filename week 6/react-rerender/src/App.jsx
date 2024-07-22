import React, { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <HeaderWithButton />
      
      <Header title="Ashitosh2"/>
    </>
  )
}

function HeaderWithButton(){
  const [title,setTitle]=useState("my name is Ashitosh");

  function updateTitle(){
    setTitle("my name is "+Math.random());
  }
  
  return(
    <>
      <button onClick={updateTitle}>Update Title</button>
      <Header title={title}/>
    </>
  )
}

//react memo 
const Header = React.memo(function Header({title}){
  return(
        <div>
          {title}
        </div>
      )
})


// old way 
// function Header({title}){
//   return(
//     <div>
//       {title}
//     </div>
//   )
// }

export default App
