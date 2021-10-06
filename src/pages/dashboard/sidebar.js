/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LogoutIcon, UsersIcon } from '@heroicons/react/solid';
import UserContext from '../../utilities/context/user';
import * as ROUTES from '../../constants/routes';
import DarkMode from '../../components/public/dark_mode';
import UserDataContext from '../../utilities/context/userData';
import notify from '../../components/public/notification';

const Sidebar = ({ toggle }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);
  const userType = localStorage.getItem('user_type');
  const { state } = useContext(UserDataContext);

  useEffect(() => {
    document.title = 'Dashboard';
    if (toggle) {
      setIsOpen('hidden');
    } else {
      setIsOpen('block');
    }
  }, [toggle]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.clear();
      history.push('/login');
      notify({
        type: 'success',
        message: 'Logout successfully'
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      id="menu"
      className={`sticky top-0 z-10 flex-col ${isOpen} h-screen px-4 py-4 bg-white dark:bg-darkMode-base shadow-inner w-54 xl:w-64 2xl:w-80 lg:px-6 xl:px-8 lg:py-6 lg:flex`}
    >
      <div className="flex-1 py-4">
        <div className="block dark:text-headerWhite">
          <h1 className="mb-1 text-2xl font-bold dark-eight">{state.institute}</h1>
        </div>
        <nav className="-mx-2 md:mt-8">
          <ul className="pt-2 space-y-3 text-base">
            <li>
              <a href={ROUTES.DASHBOARD} className="sidebar-nav">
                <svg
                  className="w-6 h-6 text-blue-seven"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span className="flex-1">Dashboard</span>
              </a>
            </li>
            <li className={`${userType === 'TA' && 'hidden'}`}>
              <a href={ROUTES.TA} className="sidebar-nav">
                <UsersIcon className="w-6 h-6 text-blue-seven" />
                <span className="flex-1">Teaching Assistant</span>
              </a>
            </li>
            <li className={`${userType === 'Student' && 'hidden'}`}>
              <a href={ROUTES.STUDENTS} className="sidebar-nav">
              <UsersIcon className="w-6 h-6 text-blue-seven" />
                <span className="flex-1">Students</span>
              </a>
            </li>
            <li>
              <a onClick={handleLogout} aria-hidden="true" className="sidebar-nav cursor-pointer">
               <LogoutIcon className="w-6 h-6 text-blue-seven" />
                <span className="flex-1">Logout</span>
              </a>
            </li>
            <li>
              <DarkMode />
            </li>
          </ul>
        </nav>
      </div>
      <button className="profile-bar">
        <img src={state.avatar} alt={`${state.name} profile`} className="rounded-full w-14 h-14" />
        <div className="col xl:items-start">
          <span className="font-bold dark:text-blue-one text-blue-nine">{state.name}</span>
          <span className="text-sm font-bold dark-text text-blue-nine opacity-50">
            View profile
          </span>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
