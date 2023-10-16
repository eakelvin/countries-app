import React, { useState, useEffect } from 'react'
// import data from '../data.json'
import Country from './Country'

const Countries = ({countries, filteredCountries}) => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10'>
      {filteredCountries.map((country, index) => {
          // console.log(country);
          return <Country key={index}
                  code={country.ccn3}
                  name={country.name.common}
                  flags={country.flags}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                   />
      })}
    </div>
  )
}

export default Countries
