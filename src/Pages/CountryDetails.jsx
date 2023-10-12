import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../data.json'
import { BsArrowLeft} from "react-icons/bs";
import Navbar from '../Components/Navbar'


const CountryDetails = () => {
    const { id } = useParams()
    const countryId = parseInt(id)
    const country = data.find(count => count.numericCode = countryId)

  return (
    <div>
        <Navbar />
        <div className='p-10'>

            <button type="button" class="text-gray-900 bg-white border border-gray-300 hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                </svg>
                Back
            </button>

            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={country.flags.png} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>

                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                        <div className="flex space-x-2 sm:space-x-4">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg> */}
                            <div className="space-y-2">
                                <p className="text-lg font-medium leadi">{country.name}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Native Name: {country.nativeName}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Population: {country.population}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Region: {country.region}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sub Region: {country.subregion}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Capital: {country.capital}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Top Level Domain: {country.topLevelDomain}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Currencies: {country.currencies.code}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Languages: {country.languages.name}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <div className="space-y-2">
                                <p className="text-lg font-medium leadi">Border Countries: </p>
                            </div>
                        </div>
                    
                    </div>
                    
                </div>
            </section>

        </div>
      
    </div>
  )
}

export default CountryDetails
