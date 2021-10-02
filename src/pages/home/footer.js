import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/solid';

const Footer = () => (
  <footer className="bg-gray-primary text-gray-base dark-primary dark:text-white  px-6 lg:px-8 py-12">
    <div className="mx-auto mb-6 lg:mb-8 flex justify-between">
      <h1 className="font-bold text-color">Assignment Management</h1>
      <a href="/#" className=" text-color opacity-70 row">
        <span>Return to top</span>
        <ArrowUpIcon className="w-6 h-6" />
      </a>
    </div>
  </footer>
);

export default Footer;
