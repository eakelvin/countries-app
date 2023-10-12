import React from 'react';
import { BsMoon } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h2 className='font-medium'>Where in the World?</h2>
        <div className="">
          <button
            type="button"
            className="flex md:order-2 text-dark  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:focus:ring-blue-800"
          >
            <BsMoon />
            <span className='pl-2'>Dark Mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
