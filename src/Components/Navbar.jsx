import React from 'react';
import { BsMoon } from "react-icons/bs";

function Header() {
  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <span className="text-xl font-bold">Where in the World?</span>
      </div>

      <div className="flex">
        <nav>
          <div className="md:flex items-center justify-between text-base text-gray-700">
            <button
              type="button"
              className="flex md:order-2 text-dark  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:focus:ring-blue-800"
            >
              <BsMoon />
              <span className='pl-2'>Dark Mode</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
