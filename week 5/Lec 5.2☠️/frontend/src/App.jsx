import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/todos'

function App() {
 

  return (
    <div>
      <CreateTodo />
      {/* <Todos /> */}
    </div>
  )
}

export default App
