import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import data from '../data.json'
import { BsArrowLeft} from "react-icons/bs";
import Navbar from '../Components/Navbar'

const CountryDetails = ({countries, darkMode, setDarkMode}) => {
    const { id }= useParams()
    // console.log(id);
    const country = countries?.find((count) => count.cca2 === id)
    // console.log(country);

  return (
    <div>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <div className='px-6 lg:px-16 py-10'>

            <Link to='/'>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <img className='w-5 h-5 mr-2' src="/left-arrow-svgrepo-com.svg" alt="" />
                Back
            </button>
            </Link>

            <section className="md:mb-28">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div className="lg:w-1/2 dark:bg-gray-800">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={country?.flags.svg} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>

                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:black dark:text-white">
                        <div className="flex space-x-2 sm:space-x-4">
                        
                            <div className="">
                                <p className="text-lg font-bold leadi">{country?.name.common}</p>
                                <p className="mb-3 font-normal"><span className='font-bold'>Native Name:</span> {country?.name.official}</p>
                                <p className="mb-3 font-normal"><span className='font-bold'>Population:</span> {country?.population}</p>
                                <p className="mb-3 font-normal"><span className='font-bold'>Region:</span> {country?.region}</p>
                                <p className="mb-3 font-normal"><span className='font-bold'>Sub Region:</span> {country?.subregion}</p>
                                <p className="mb-3 font-normal"><span className='font-bold'>Capital:</span> {country?.capital}</p>
                                <p className="mb-3 font-normal"><span className='font-bold'>Top Level Domain:</span> {country?.tld}</p>
                                <p className="mb-3 font-normal"><span className='font-bold'>Currencies:</span>
                                    {country?.currencies && (
                                        <span>
                                            {Object.entries(country?.currencies).map(([code, currency]) => (
                                            <span key={code}>
                                                <span> {currency.name}</span>
                                                <span className='pl-2'>{currency.symbol}</span>
                                            </span>
                                            ))}
                                        </span>
                                    )}  
                                </p>
                                <p className="mb-3 font-normal"><span className='font-bold'>Languages:</span>{" "}
                                    {country?.languages && Object.values(country.languages).join(", ")}
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                                <div className="flex text-lg font-medium leadi">
                                    <span className='font-bold'>Border Countries:</span>
                                    {country?.borders && Array.isArray(country.borders) && country.borders.length > 0 ? (
                                        <span>
                                        {country.borders.map((borderCountry, index) => (
                                            <span className='pl-2 inline-flex' key={index}>
                                                <div className='border border-slate-500 px-2 mb-2'>{borderCountry}</div>
                                            </span>
                                        ))}
                                        </span>
                                    ) : (
                                        <p className='pl-2 font-normal'>No bordering countries.</p>
                                    )}
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
