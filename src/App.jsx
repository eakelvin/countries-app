import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CountryDetails from './Pages/CountryDetails'


function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([])

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

  // const handleSearch = (formData) => {
  //   if (formData.region !== 'all') {
  //     const filteredByRegion = countries.filter((country) =>
  //       country.region.toLowerCase() === formData.region.toLowerCase()
  //     );
  //     setFilteredCountries(filteredByRegion);
  //   } else if (formData.country !== '') {
  //     const filteredCountries = countries.filter((country) =>
  //       country.name.common.toLowerCase().includes(formData.country.toLowerCase())
  //     );
  //     setFilteredCountries(filteredCountries);
  //   } else {
  //     setFilteredCountries(countries);
  //   }
  // };

  
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
      <Router>
        <Routes>
          <Route exact path='/' element={<Home countries={countries} handleSearch={handleSearch} handleRegion={handleRegion} filteredCountries={filteredCountries} />} />
          <Route path='/country/:id' element={<CountryDetails countries={countries} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
