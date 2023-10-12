import React from 'react'
import Navbar from '../Components/Navbar'
import SearchForm from '../Components/Search'
import Countries from '../Components/Countries'

const Home = () => {
  return (
    <div>
        <Navbar />
            <div className='px-6 lg:px-16 py-10'>
                <SearchForm />
                <Countries />
            </div>
    </div>
  )
}

export default Home
