import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'

import Button from "react-bootstrap/Button"

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
