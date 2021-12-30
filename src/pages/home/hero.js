import React from 'react';
import hero from '../../asserts/images/hero.svg';

const Hero = () => (
  <div className="py-12 md:py-24 bg-grey-one  dark-base ">
    <div className="grid-element">
      <div className="self-center order-1 col-span-2 mt-12 md:order-1 md:mt-0 dark-base">
        <h1 className="heading-hero">
          The best way to manage your <br />
          <span className="text-blue-seven font-bold text-4xl dark-nine">Assignment</span>
        </h1>
        <p className="hidden lg:flex mt-4  text-gray dark-base">
          Assignment management dashboard is a simple dashboard to manage the assignment of the
          students and teachers of any Institute.
        </p>
      </div>
      <div className="order-2 col-span-2 md:order-2 xl:col-span-3">
        <img
          rel="preload"
          src="https://assignment-management.s3.amazonaws.com/slack-trello-screens-by-oblik-studio.svg"
          alt="Hero"
        />
      </div>
    </div>
  </div>
);

export default Hero;
