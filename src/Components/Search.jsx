import React, { useState } from 'react';

function SearchForm({ handleSearch, countries }) {
  const [formData, setFormData] = useState({
    country: "",
    region: ""
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevState => {
      return {
        ...prevState, [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    handleSearch(formData)
    console.log(formData);
    setFormData({
      country: "",
      region: ""
    })
  }

  return (
        <form onSubmit={handleSubmit}>
        <div className="md:flex md:justify-between">
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              name='country'
              value={formData.country}
              onChange={handleChange}
              id="default-search"
              className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for a country..."
              // required
            />
          </div>

            <div className="w-1/2 md:w-1/4 py-10 md:py-0">
                <select
                    id="region"
                    value={formData.region}
                    onChange={handleChange}
                    // onChange={event => setFormData(event.target.value)}
                    name='region'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option defaultValue>Filter By Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </div>
        {/* <button>Click me</button> */}
        </form>
  );
}

export default SearchForm;
