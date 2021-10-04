/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../../utilities/context/user';
import * as ROUTES from '../../constants/routes';
import DarkMode from '../../components/public/dark_mode';

const Sidebar = ({ toggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);
  const avatar = localStorage.getItem('avatar');

  useEffect(() => {
    document.title = 'Dashboard';
    if (toggle) {
      setIsOpen('hidden');
    } else {
      setIsOpen('block');
    }
  }, [toggle]);

  return (
    <div
      id="menu"
      className={`sticky top-0 z-10 flex-col ${isOpen} h-screen px-4 py-4 bg-white dark:bg-darkMode-base shadow-inner w-54 sidebar-responsive`}
    >
      <div className="flex-1 py-4">
        <div className="block dark:text-headerWhite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-32 h-32 dark:text-purple-five"
            fill="currentColor"
            viewBox="0 0 64 64"
          >
            <title>Assignment Management</title>
            <g id="Blue_Print" data-name="Blue Print">
              <path d="M63,12H12V1a1,1,0,0,0-1-1H7A7,7,0,0,0,0,7V57a7,7,0,0,0,7,7H63a1,1,0,0,0,1-1V13A1,1,0,0,0,63,12ZM2,7A5,5,0,0,1,7,2h3V50c-3.27,0-5.59-.34-8,2.11ZM62,62H7a5,5,0,0,1-3.53-8.54C6.58,50.32,12,53.46,12,51V14H62Z" />
              <path d="M61,0H23c-.32,0-.12-.06-3.61,1.69C16.54,3.11,16,3.17,16,4s.53.88,3.39,2.31C22.9,8.07,22.68,8,23,8H61a3,3,0,0,0,3-3V3A3,3,0,0,0,61,0ZM51,2V6H24.72a7.34,7.34,0,0,0,0-4ZM21,4.86a7.07,7.07,0,0,0,0-1.72l1.77-.88a5.52,5.52,0,0,1,0,3.48ZM53,2h2V6H53Zm9,3a1,1,0,0,1-1,1H57V2h4a1,1,0,0,1,1,1Z" />
              <path d="M17,29h6v9a1,1,0,0,0,1,1H36V52a1,1,0,0,0,1,1h5v3a1,1,0,0,0,1,1H57a1,1,0,0,0,1-1V48a1,1,0,0,0-1-1H43a1,1,0,0,0-1,1v3H38V39h4v3a1,1,0,0,0,1,1H57a1,1,0,0,0,1-1V34a1,1,0,0,0-1-1H43a1,1,0,0,0-1,1v3H38V25h4v3a1,1,0,0,0,1,1H57a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H43a1,1,0,0,0-1,1v3H37a1,1,0,0,0-1,1V37H25V29h6a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v8A1,1,0,0,0,17,29ZM44,49H56v6H44Zm0-14H56v6H44Zm0-14H56v6H44ZM18,21H30v6H18Z" />
              <path d="M32,45H21a1,1,0,0,0,0,2H32A1,1,0,0,0,32,45Z" />
              <path d="M32,50H21a1,1,0,0,0,0,2H32A1,1,0,0,0,32,50Z" />
              <path d="M32,55H21a1,1,0,0,0,0,2H32A1,1,0,0,0,32,55Z" />
              <path d="M17,47a1,1,0,0,0,0-2A1,1,0,0,0,17,47Z" />
              <path d="M17,52a1,1,0,0,0,0-2A1,1,0,0,0,17,52Z" />
              <path d="M17,57a1,1,0,0,0,0-2A1,1,0,0,0,17,57Z" />
            </g>
          </svg>
        </div>
        <nav className="-mx-2 md:mt-8">
          <ul className="pt-2 space-y-3 text-base">
            <li>
              <a href={ROUTES.DASHBOARD} className="sidebar-nav">
                <svg
                  className="w-6 h-6 text-purple-seven"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span className="flex-1">Dashboard</span>
              </a>
            </li>
            <li>
              <DarkMode />
            </li>
          </ul>
        </nav>
      </div>
      <button className="profile-bar">
        <img src={avatar} alt={`${user} profile`} className="rounded-full w-14 h-14" />
        <div className="col xl:items-start">
          <span className="font-bold dark:text-purple-one text-purple-nine">{user}</span>
          <span className="text-sm font-bold dark-text text-purple-nine opacity-50">
            View profile
          </span>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
