/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');

    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
  }

  return 'light';
};

const Theme = (initialTheme) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;

    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');

    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);
  return { theme, setTheme };
};

export default Theme;
