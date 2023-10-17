import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Home from './Pages/Home'
import CountryDetails from './Pages/CountryDetails'

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
    // console.log(data); 
    setCountries(data);
    setFilteredCountries(data)
  })
    .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  const handleSearch = (formData) => {
    if (formData.country === '') {
      setFilteredCountries(countries)
    } else {
      const filteredCountries = countries.filter((country) => 
      country.name.common.toLowerCase().includes(formData.country.toLowerCase())
      )
      setFilteredCountries(filteredCountries)
      }
    }

  const handleRegion = (formData) => {
    if (formData.region !== 'all') {
      const filteredByRegion = countries.filter((country) =>
        country.region.toLowerCase() === formData.region.toLowerCase()
      );
      setFilteredCountries(filteredByRegion);
    } else {
      setFilteredCountries(countries);
    }
  };

  return (
    <>
      <div className='dark:bg-black dark:text-white'>
      <Router>
        <Routes>
          <Route exact path='/' 
                element={
                <Home 
                  countries={countries} 
                  handleSearch={handleSearch} 
                  handleRegion={handleRegion} 
                  filteredCountries={filteredCountries}
                  darkMode={darkMode} 
                  setDarkMode={setDarkMode} 
                  />
                } 
          />
          <Route path='/country/:id' 
                element={
                  <CountryDetails 
                    countries={countries}
                    darkMode={darkMode} 
                    setDarkMode={setDarkMode} 
                  />} 
          />
        </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
