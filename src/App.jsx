import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CountryDetails from './Pages/CountryDetails'


function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
    // console.log(data); 
    setCountries(data);
  })
    .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home countries={countries} />} />
          <Route path='/country/:id' element={<CountryDetails countries={countries} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
