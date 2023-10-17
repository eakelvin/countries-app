import React from 'react';
import { Link } from 'react-router-dom';

function Country(props) {
  const { name, flags, population, region, capital, code } = props;
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/country/${code}`}>
        <img className="rounded-t-lg" src={flags.svg} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Population: {population}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Region: {region}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Capital: {capital}</p>
      </div>
      </Link>
    </div>
  );
}

export default Country;
