import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Action = ({ currentNav, setCurrentNav }) => {
  const [state, setState] = useState();
  return (
    <div className="flex flex-col px-4 py-4 mt-8 space-y-4 bg-white dark:bg-grey-eight rounded-lg large-x-y lg:flex-row lg:space-y-0 lg:space-x-12">
      <div>
        <h2 className="mb-2 text-xl font-bold dark-nine">Filter Assignment</h2>
      </div>
      <nav className="space-y-2 md:flex md:space-x-4 md:space-y-0">
        <div
          onClick={() => {
            setCurrentNav('all');
          }}
          aria-hidden="true"
          className={`inline-flex col w-32 px-3 py-3 box-border ${
            currentNav === 'all' && 'bg-current-Navbar'
          }`}
        >
          <span className="dark-nine opacity-70">All</span>
        </div>
        <div
          onClick={() => {
            setCurrentNav('open');
          }}
          aria-hidden="true"
          className={`inline-flex col w-32 px-3 py-3 box-border ${
            currentNav === 'open' && 'bg-current-Navbar'
          }`}
        >
          <span className="dark-nine opacity-70">Open</span>
        </div>
        <div
          onClick={() => {
            setCurrentNav('complete');
          }}
          aria-hidden="true"
          className={`inline-flex col w-32 px-3 py-3 box-border ${
            currentNav === 'complete' && 'bg-current-Navbar'
          }`}
        >
          <span className="dark-nine opacity-70">Complete</span>
        </div>
        <div
          onClick={() => {
            setCurrentNav('missing');
          }}
          aria-hidden="true"
          className={`inline-flex col w-32 px-3 py-3 box-border ${
            currentNav === 'missing' && 'bg-current-Navbar'
          }`}
        >
          <span className="dark-nine opacity-70">Missing</span>
        </div>
      </nav>
    </div>
  );
};

export default Action;

Action.propTypes = {
  currentNav: PropTypes.string.isRequired,
  setCurrentNav: PropTypes.func.isRequired
};
