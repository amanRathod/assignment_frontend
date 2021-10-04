import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard';
    console.log('dash');
    // fetch();
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
