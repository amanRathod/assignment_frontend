import React, { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import ThemeContext from '../../utilities/context/theme';

const DarkMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  console.log(setTheme);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <SunIcon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="h-10 w-10  dark:text-gray-base  focus:outline-none"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="h-10 w-10 focus:outline-none dark:text-gray-base"
        />
      )}
    </div>
  );
};

export default DarkMode;
