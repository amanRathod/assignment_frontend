import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FilterIcon } from '@heroicons/react/solid';
import UserDataContext from '../../utilities/context/userData';

const Action = () => {
  const { state, dispatch } = useContext(UserDataContext);

  const updateCurrentNav = (name) => {
    dispatch({ type: 'currentNav', fieldName: 'currentNav', payload: name });
  };

  return (
    <div className="flex flex-col px-4 py-4 mt-8 space-y-4 bg-white dark:bg-grey-eight rounded-lg large-x-y lg:flex-row lg:space-y-0 lg:space-x-12">
      <div className="flex">
        <FilterIcon className="icon1 " />
        <h2 className="mb-2 text-xl font-bold dark-nine">Filter Assignment</h2>
      </div>
      <nav className="space-y-2 md:flex md:space-x-4 md:space-y-0">
        <div
          onClick={() => {
            updateCurrentNav('all');
          }}
          aria-hidden="true"
          className={`inline-flex col w-32 px-3 py-3 box-border ${
            state.currentNav === 'all' && 'bg-current-Navbar'
          }`}
        >
          <span className="dark-nine opacity-70">All</span>
        </div>
        <div
          onClick={() => {
            updateCurrentNav('open');
          }}
          aria-hidden="true"
          className={`inline-flex col w-32 px-3 py-3 box-border ${
            state.currentNav === 'open' && 'bg-current-Navbar focus-ring'
          }`}
        >
          <span className="dark-nine opacity-70">Open</span>
        </div>
        <div
          onClick={() => {
            updateCurrentNav('complete');
          }}
          aria-hidden="true"
          className={`inline-flex col w-32 px-3 py-3 box-border ${
            state.currentNav === 'complete' && 'bg-current-Navbar'
          }`}
        >
          <span className="dark-nine opacity-70">Complete</span>
        </div>
        <div
          onClick={() => {
            updateCurrentNav('missing');
          }}
          aria-hidden="true"
          className={`inline-flex col w-32 px-3 py-3 box-border ${
            state.currentNav === 'missing' && 'bg-current-Navbar'
          } ${state.userType !== 'Student' && 'hidden'} `}
        >
          <span className="dark-nine opacity-70">Missing</span>
        </div>
      </nav>
    </div>
  );
};

export default Action;
