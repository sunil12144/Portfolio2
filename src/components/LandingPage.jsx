import React from 'react'
import Header from './header/Header'
import Home from './home/Home'
import About from './about/About'
import Portfolio from './portfolio/Portfolio'
import Footer from './footer/Footer'
import Services from './services/Services'
// import About from './about/About'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default LandingPage