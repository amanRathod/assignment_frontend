import React, { useEffect, useState } from 'react';
import MobileBar from '../../pages/dashboard/mobile-bar';
import Sidebar from '../../pages/dashboard/sidebar';
import Dashboard from '../../pages/dashboard';

const DashboardView = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  return (
    <div className="flex flex-col min-h-screen dark:bg-darkMode-primary text-base subpixel-antialiased font-semibold dark-eight lg:flex-row">
      <MobileBar toggle={toggle} setToggle={setToggle} />
      <Sidebar toggle={toggle} />
      <Dashboard />
    </div>
  );
};

export default DashboardView;
