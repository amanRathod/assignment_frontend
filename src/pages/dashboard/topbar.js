import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Topbar = () => (
  <div className="flex justify-between w-full mx-auto max-w-screen-2xl">
    <ToastContainer />
    <div className="hidden md:block mt-10">
      <h1 className="mb-1 text-2xl font-bold dark-eight">Assignment</h1>
      <p className="text-lg dark-nine lg:block">Dashboard overview</p>
    </div>
    <div className="flex justify-between flex-1 space-x-4 md:justify-end">
      <div className="relative w-full md:max-w-xs">
        <img
          src="https://assignment-managements.s3.ap-south-1.amazonaws.com/planning-sheets-of-paper-coffee-by-oblik-studio.svg"
          alt="logo"
          className="h-32 w-full"
        />
      </div>
    </div>
  </div>
);

export default Topbar;
