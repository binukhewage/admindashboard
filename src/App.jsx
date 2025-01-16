import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './Pages/Users'
import Advertisement from './Pages/Advertisement'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='dashboard/users' element={<Users/>}/>
        <Route path='dashboard/advertisements' element={<Advertisement/>}/>
        <Route path='dashboard/news' element={<Advertisement/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
