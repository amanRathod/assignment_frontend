import React, { useState } from 'react';
import Topbar from './topbar';
import Action from './action';
import All from '../navbar/all';
import Open from '../navbar/open';
import Complete from '../navbar/complete';
import Missing from '../navbar/missing';

const Dashboard = () => {
  const [currentNav, setCurrentNav] = useState('all');
  return (
    <div className="flex flex-col flex-1 px-4 py-4 overflow-hidden bg-purple-fifty dark:bg-darkMode-primary lg:py-8 lg:px-6 xl:px-8">
      <Topbar />
      <Action currentNav={currentNav} setCurrentNav={setCurrentNav} />
      {currentNav === 'all' && <All />}
      {currentNav === 'open' && <Open />}
      {currentNav === 'complete' && <Complete />}
      {currentNav === 'missing' && <Missing />}
    </div>
  );
};

export default Dashboard;
