import { useEffect, useState } from "react"

function App() {
  const[todos,setTodos]=useState([]);

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos").then(async function(response){
        const text = await response.json();
        setTodos(text.todos);
      })
    },[])
    },3000)
  return (
   <>
    {todos.map(todo => <TodoListing title={todo.title} description={todo.description}/>)}
   </>
  )
}

function TodoListing({title,description}){
  return <>
    <h3>
      {title}
    </h3>
    <h4>
      {description}
    </h4>
  </>
} 

export default App
