import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CountryDetails from './Pages/CountryDetails'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/country/:id' element={<CountryDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
