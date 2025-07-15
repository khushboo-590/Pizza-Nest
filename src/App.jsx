import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Craving from './components/Craving'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Gallery/>
      {/* <Craving />
      <Footer/> */}
    </>
  )
}

export default App
