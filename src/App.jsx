import React from 'react'
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from './components/Projects'
import Top from './components/Top'


function App() {
  return (
    <div >
      <Top/>
      <Navbar/>
      <Home/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
