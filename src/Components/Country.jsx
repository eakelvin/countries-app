import React from 'react';
import { Link } from 'react-router-dom';

function Country(props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/country/${props.index}`}>
        <img className="rounded-t-lg" src={props.flags.svg} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Population: {props.population}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Region: {props.region}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Capital: {props.capital}</p>
      </div>
      </Link>
    </div>
  );
}

export default Country;
