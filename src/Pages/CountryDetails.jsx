import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import data from '../data.json'
import { BsArrowLeft} from "react-icons/bs";
import Navbar from '../Components/Navbar'


const CountryDetails = ({countries}) => {
    const { id } = useParams()
    console.log(id);
    const countryId = parseInt(id)
    const country = countries.find((count) => count.id === countryId)
    console.log(country);

  return (
    <div>
        <Navbar />
        <div className='px-6 lg:px-16 py-10'>

            <Link to='/'>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <img className='w-5 h-5 mr-2' src="/left-arrow-svgrepo-com.svg" alt="" />
                Back
            </button>
            </Link>

            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div className="lg:w-1/2 dark:bg-gray-800">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            {/* <img src={country.flags.png} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" /> */}
                        </div>
                    </div>

                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                        <div className="flex space-x-2 sm:space-x-4">
                        
                            {/* <div className="space-y-2">
                                <p className="text-lg font-bold leadi">{country.name}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Native Name: {country.nativeName}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Population: {country.population}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Region: {country.region}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sub Region: {country.subregion}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Capital: {country.capital}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Top Level Domain: {country.topLevelDomain}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Currencies: {country.currencies[0].code}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Languages: {country.languages[2].name}</p>
                            </div> */}
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                                <div className="flex text-lg font-medium leadi">
                                    Border Countries:
                                    {/* <div className='border-solid border-2 pl-2 pr-3 mr-3 ml-2'>{country.borders[0]}</div>
                                    <div className='border-solid border-2 pl-2 pr-3 mr-3'>{country.borders[1]}</div>
                                    <div className='border-solid border-2 pr-3 mr-3'>{country.borders[2]}</div>
                                    <div className='border-solid border-2 pr-3 mr-3'>{country.borders[3]}</div> */}
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
