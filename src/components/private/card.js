import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ content, heading, no }) => (
  <div className="col-span-1 mt-4 text-center px-4 py-4 bg-purple-fifty dark:bg-grey-eight rounded-lg large-x-y">
    <div className=" bg-purple-seven outline-none border-purple-nine dark:bg-purple-five  text-white border rounded-full h-8 w-8">
      {no}
    </div>
    <h3 className="mb-4 text-xl font-bold dark-nine lg:mb-6">{heading}</h3>
    <p>{content}</p>{' '}
  </div>
);

export default Card;
