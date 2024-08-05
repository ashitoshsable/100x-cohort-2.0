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
    // the [] is a dependency array talks about when this callback function should run

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
