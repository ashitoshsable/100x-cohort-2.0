

//Right Way
function App(){
  return <>

    {/* important */}
    <CardWrapper>
      Hi there.
    </CardWrapper>
    <CardWrapper>
      Hello there.
    </CardWrapper>
  </>
}

function CardWrapper({children}){
  return <div style={{border:"2px solid black", padding:"20px"}}>
    {children}
  </div>
}

//old way 
// function App() {
//   return (
//     <>
//       <CardWrapper prop={<TextComponent/>}/>
//       <CardWrapper prop={<TextComponent2/>}/>
//     </>
//   )
// }

// function CardWrapper({prop}){
//   return <div style={{border:"2px solid black"}}>
//       {prop}
//     </div>
// }

// function TextComponent(){
//   return <div>
//   Hello There
//   </div>
// }

// function TextComponent2(){
//   return <div>
//   Hi There
//   </div>
// }


export default App
