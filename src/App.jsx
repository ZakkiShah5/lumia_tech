import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Who from './pages/Who'
import WhatWeDo from './pages/WhatWeDo'
import Partners from './pages/Partners'
import Careers from './pages/Careers'
import Contact from './components/Contact'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true // only animate once
    })
  }, [])

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/whoweare' element={<Who/>} />
        <Route path='/whatwedo' element={<WhatWeDo />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/careers' element={<Careers />} /> 
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
