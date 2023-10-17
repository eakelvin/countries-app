import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import SearchForm from '../Components/Search'
import Countries from '../Components/Countries'


const Home = ({countries, handleSearch, filteredCountries, handleRegion}) => {
 
  return (
    <div className='dark:bg-black dark:text-white'>
        <Navbar />
            <div className='px-6 lg:px-16 py-10'>
                <SearchForm handleSearch={handleSearch} handleRegion={handleRegion}  />
                <Countries countries={countries} filteredCountries={filteredCountries} />
            </div>
    </div>
  )
}

export default Home
