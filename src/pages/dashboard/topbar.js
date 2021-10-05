import React, { useContext } from 'react';
import UserDataContext from '../../utilities/context/userData';

const Topbar = () => {
  const { state } = useContext(UserDataContext);
  return (
    <div className="flex justify-between w-full mx-auto max-w-screen-2xl">
      <div className="hidden md:block">
        <h1 className="mb-1 text-2xl font-bold dark-eight">Assignment</h1>
        <p className="text-lg dark-nine lg:block">Dashboard overview</p>
      </div>
      <div className="flex justify-between flex-1 space-x-4 md:justify-end">
        <div className="relative w-full md:max-w-xs">
          <svg
            className="absolute w-5 h-5 text-purple-nine top-3 left-3 opacity-70"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="w-full h-10 pr-4 text-sm font-semibold input-control2"
            placeholder="Enter your search term..."
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
