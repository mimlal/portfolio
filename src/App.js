
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

import Youtube from './components/Youtube/Youtube'
import About from './components/about/About'

import Skills from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
     
    
      <About/>
      <Skills/>
      <Youtube/>
      <Contact/>
    </>
  )
}

export default App
