import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { LogoutIcon, UserIcon, UserGroupIcon } from '@heroicons/react/solid';
import * as ROUTES from '../../constants/routes';
import DarkMode from '../../components/public/dark_mode';
import UserDataContext from '../../utilities/context/userData';
import { profilePlaceholder, sidebarPlaceholder } from '../../components/public/placeholder';
import notify from '../../components/public/notification';
import { getDummyPicture } from '../../constants/theme';

const Sidebar = ({ toggle }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(UserDataContext);

  // hide the sidebar when hamburger(3-dot) is closed
  useEffect(() => {
    document.title = 'Dashboard';
    if (toggle) {
      setIsOpen('hidden');
    } else {
      setIsOpen('block');
    }
  }, [toggle]);

  // during logout just delete the access-token from localstorage
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      localStorage.removeItem('user_type');
      if (Cookies.get('token')) {
        Cookies.remove('token');
        Cookies.remove('user');
      }
      history.push('/login');
      notify({
        type: 'success',
        message: 'Logout successfully',
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleNav = (name) => {
    dispatch({ type: 'currentNav', fieldName: 'currentNav', payload: name });
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
              <a
                href={ROUTES.DASHBOARD}
                className={`sidebar-nav ${
                  state.currentNav === 'all' && 'bg-current-Navbar focus-ring'
                }`}
              >
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
            <ReactPlaceholder ready={state.avatar} customPlaceholder={sidebarPlaceholder}>
              <li className={`${state.userType === 'TA' && 'hidden'}`}>
                <a
                  onClick={() => handleNav('ta')}
                  aria-hidden="true"
                  className={`sidebar-nav ${
                    state.currentNav === 'ta' && 'bg-current-Navbar focus-ring'
                  }`}
                >
                  <UserGroupIcon className="icon1" />
                  <span className="flex-1 cursor-pointer">Teaching Assistant</span>
                </a>
              </li>
              <li className={`${state.userType === 'Student' && 'hidden'}`}>
                <a
                  onClick={() => handleNav('student')}
                  aria-hidden="true"
                  className={`sidebar-nav ${
                    state.currentNav === 'student' && 'bg-current-Navbar focus-ring'
                  }`}
                >
                  <UserGroupIcon className="icon1" />
                  <span className="flex-1 cursor-pointer">Students</span>
                </a>
              </li>
            </ReactPlaceholder>
            <li>
              <a
                onClick={() => handleNav('profile')}
                aria-hidden="true"
                className={`sidebar-nav ${
                  state.currentNav === 'profile' && 'bg-current-Navbar focus-ring cursor-pointer'
                }`}
              >
                <UserIcon className="icon1" />
                <span className="flex-1 cursor-pointer">Profile</span>
              </a>
            </li>
            <li>
              <a onClick={handleLogout} aria-hidden="true" className="sidebar-nav cursor-pointer">
                <LogoutIcon className="icon1" />
                <span className="flex-1">Logout</span>
              </a>
            </li>
            <li>
              <DarkMode />
            </li>
          </ul>
        </nav>
      </div>
      <button type="submit" className="profile-bar">
        <ReactPlaceholder ready={state.avatar} customPlaceholder={profilePlaceholder}>
          <img src={state.avatar || getDummyPicture(`${state.name}`)} alt="profile" className="rounded-full w-14 h-14" />
        </ReactPlaceholder>
        <div className="col xl:items-start">
          <span className="font-bold dark-eight">{state.name}</span>
          <span
            className="text-sm font-bold dark-nine opacity-80"
            onClick={() => handleNav('profile')}
            aria-hidden="true"
          >
            View profile
          </span>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
// proptype validation
Sidebar.propTypes = {
  toggle: PropTypes.bool.isRequired,
};
