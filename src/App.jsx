import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import About from './pages/About'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App