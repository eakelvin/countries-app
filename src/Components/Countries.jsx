import React from 'react'
import data from '../data.json'
import Country from './Country'

const Countries = () => {

    const countries = data.map((item) => {
        return <Country key={item.numericCode} {...item} />
    })

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10'>
      {countries}
    </div>
  )
}

export default Countries
