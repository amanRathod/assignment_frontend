import React from 'react';
import hero from '../../asserts/images/hero.svg';

const Hero = () => (
  <div className="py-12 md:py-24 bg-grey-one  dark-base ">
    <div className="grid-element">
      <div className="self-center order-1 col-span-2 mt-12 md:order-1 md:mt-0 dark-base">
        <h1 className="heading-hero">
          The best way to manage your <br />
          <span className="text-purple-seven font-bold text-4xl dark-nine">Assignment</span>
        </h1>
        <p className="hidden lg:flex mt-4  text-gray dark-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </p>
      </div>
      <div className="order-2 col-span-2 md:order-2 xl:col-span-3">
        <img
          rel="preload"
          src={hero}
          alt="Hero"
          srcSet={`${hero} 300w, ${hero} 600w `}
          className="h-180 w-105 md:h-138 md:w-235 lg:h-248 lg:w-245"
        />
      </div>
    </div>
  </div>
);

export default Hero;
