import React from 'react';
import feature from '../../asserts/images/features.svg';
import Card from '../../components/private/card';

const Features = () => (
  <>
    <div className="py-12 md:py-24 dark-base ">
      <div className="grid-element">
        <div className="self-center order-1 col-span-2 mt-12 md:order-2 md:mt-0 dark-base">
          <h1 className="text-color text-center text-4xl">Features</h1>{' '}
          <div className="m-3 grid ">
            {' '}
            <Card
              heading="Create Assignment"
              no="1"
              content="Admin can create an assignment which will be a doc/pdf file"
            />
            <Card
              heading="Sbumit Assignment"
              no="2"
              content="Student can submit an assignment to the respective assign Teaching Assistant"
            />
            <Card
              heading="Evaluate"
              no="3"
              content="Teaching Assistant can evaluate assignment of the assign students"
            />
          </div>
        </div>
        <div className="order-2 col-span-2 md:order-1 xl:col-span-3">
          <img
            rel="preload"
            src={feature}
            alt="svg"
            srcSet={`${feature} 300w, ${feature} 600w `}
            className="h-180 w-105 md:h-138 md:w-235 lg:h-248 lg:w-245"
          />
        </div>
      </div>
    </div>
  </>
);
export default Features;
