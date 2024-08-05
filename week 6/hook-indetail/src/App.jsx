import { useEffect, useState } from "react"

function App() {
  const[currentId,setCurrentId]=useState(1);

  return (
    <>
      <button onClick={()=>{
        setCurrentId(1);
      }}>1</button>
      <button onClick={()=>{
        setCurrentId(2);
      }}>2</button>
      <button onClick={()=>{
        setCurrentId(3);
      }}>3</button>
      <button onClick={()=>{
        setCurrentId(4);
      }}>4</button>
      <TodoWithId id={currentId}/>
    </>
  )
}

function TodoWithId({id}){
  const [todo,setTodo]=useState({});

  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async function(response){
      const text=await response.json();
      setTodo(text.todo);
    })
  },[id])

  return<>
    <h3>{todo.title}</h3>
    <h4>{todo.description}</h4>
  </>
}

export default App
