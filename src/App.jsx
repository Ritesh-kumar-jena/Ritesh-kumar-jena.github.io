import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Project from './Pages/Project'

function App() {
  

  return (
    <>
     <Navbar/>
     <Home id="home" />
     <About id="about" />
     <Skills id="skills" />
     <Project id="projects" />
     <Contact id="contact" />
     <Footer/>
    </>
  )
}

export default App
