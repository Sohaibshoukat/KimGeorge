import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Services from './Pages/Services'
import ScrollToTop from './Components/scrolltop'
import About from './Pages/About'
import Lawyers from './Pages/Lawyers'

function App() {

  return (
    <>
    <main className='text-white'>
      <BrowserRouter >
      <ScrollToTop/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/Lawyer' element={<Lawyers/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
    </>
  )
}

export default App
