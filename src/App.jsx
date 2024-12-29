import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Course from './Page/Course'
import Home from './Page/Home'
import Contract from './Page/Contract'


const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/contract" element={<Contract/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
