import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import React, { Suspense } from 'react'

import './App.css'
const DashBoard = React.lazy(()=> import('./components/DashBoard'))
const Landing = React.lazy(()=> import('./components/Landing'))

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback="loading..."><DashBoard/></Suspense>}/>
        <Route path="/" element={<Suspense fallback="loading..."><Landing/></Suspense>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

function NavBar(){
  const navigate = useNavigate();

  return(
    <div>
        <button onClick={()=>{
          navigate("/");
        }}>Landing</button>
        <button onClick={()=>{
          navigate("dashboard");
        }}>DashBoard</button>
      </div>
  )

}

export default App
