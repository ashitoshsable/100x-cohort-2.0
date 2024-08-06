import {RecoilRoot, useRecoilValueLoadable} from "recoil";
import './App.css'
import { TodoAtomFamily } from "./store/atoms/Todos";

function App() {
  return (
    <>
      <RecoilRoot>
        <Todo id={1}></Todo>
        <Todo id={2}></Todo>
      </RecoilRoot>
    </>
  )
}

function Todo({id}){
  const currentTodo=useRecoilValueLoadable(TodoAtomFamily(id));
  // console.log(currentTodo);
  if(currentTodo.state==="loading"){
    return <div>
      Loading...
    </div>
  }else if(currentTodo.state==="hasValue"){
    return (
      <>
        <h2>{currentTodo.contents.title}</h2>
        <h3>{currentTodo.contents.description}</h3>
      </>
    )
  }
}

export default App
