/* eslint-disable react/button-has-type */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';
import * as ROUTES from '../../constants/routes';
import DarkMode from './dark_mode';

const PublicHeader = () => {
  const [hamburger, setHamburger] = React.useState('hidden');
  const handleClick = (e) => {
    e.preventDefault();
    try {
      setHamburger(hamburger === 'hidden' ? 'visible' : 'hidden');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="row header">
        <h1 className="m-3 underline-link ">Assignment Management</h1>
        <nav className="row hidden md:flex dark-nine">
          <NavLink to={ROUTES.LOGIN} className="m-3 text-color underline-link">
            Login
          </NavLink>
          <NavLink to={ROUTES.REGISTER} className="m-3 text-color underline-link">
            Register
          </NavLink>
          <DarkMode />
        </nav>
        <div className="md:hidden flex items-center">
          <button type="button" className="outline-none" onClick={handleClick}>
            <MenuAlt3Icon
              className={`w-8 h-8 hamburger ${hamburger === 'visible' ? 'hidden' : 'visible'}`}
            />
            <XIcon className={`w-8 h-8 hamburger ${hamburger}`} />
          </button>
        </div>
      </header>
      <header className="row header">
        <nav className={`col ${hamburger} md:hidden`}>
          <NavLink to={ROUTES.LOGIN} className="m-3 text-color underline-link">
            Login
          </NavLink>
          <NavLink to={ROUTES.REGISTER} className="m-3 text-color underline-link">
            Register
          </NavLink>
          <DarkMode />
        </nav>
      </header>
    </>
  );
};

export default PublicHeader;
