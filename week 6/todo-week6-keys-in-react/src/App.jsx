import { useState } from 'react'
import React from 'react'

let idNum = 4;


function App() {
  const [todos,setTodos] = useState([{
    id:1,
    title:"Go to gym",
    description:"Gym time is 7-9pm"
  },{
    id:2,
    title:"Go to class",
    description:"class time is 4-7pm"
  },{
    id:3,
    title:"sleep",
    description:"sleep time is 2-4pm"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:idNum++,
      title:"Go to School",
      description:"School time is 6am-1pm"
    }])
  }

  return (
    <>
    <button onClick={addTodo}>Add a todo</button>
    {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>

  )
}

function Todo({title,description}){
  return(
    <>
      <h1>
        {title}
      </h1>
      <h5>
        {description}
      </h5>
    </>
  )
}

export default App
