/* eslint-disable arrow-body-style */
import React, { useState, useContext } from 'react';
import UserDataContext from '../../utilities/context/userData';

const TeachingAssistant = () => {
  const { state, dispatch } = useContext(UserDataContext);
  return (
    <div className="px-4 py-4 mt-8 bg-white dark:bg-grey-seven rounded-lg large-x-y">
      <h2 className="mb-4 text-xl font-bold dark-nine lg:mb-6">Submitted Assignments</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-12">
        {state.teaching_assistant ? (
          state.teaching_assistant.map((ta, index) => (
            <div key={index} className="flex items-center w-full space-x-4 focus-ring">
              <img src={ta.avatar} alt={ta.name} className="rounded-full w-14 h-14" />
              <div className="flex flex-col items-start flex-1 text-sm">
                <span className="font-bold dark-nine ">{ta.name}</span>
                <span className="text-sm font-bold dark-eight opacity-50">View profile</span>
              </div>
              <span className="px-3 mb-2 text-base text-green-five bg-green-one rounded-full border-full">
                status
              </span>
            </div>
          ))
        ) : (
          <h1>No Teaching Assistant assigned</h1>
        )}
      </div>
    </div>
  );
};

export default TeachingAssistant;
