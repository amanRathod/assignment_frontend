import React, { useContext } from 'react';
import UserDataContext from '../../utilities/context/userData';

const Student = () => {
  const { state } = useContext(UserDataContext);
  return (
    <div className="px-4 py-4 mt-8 bg-white dark:bg-grey-seven rounded-lg large-x-y">
      <h2 className="mb-4 text-xl font-bold dark-nine lg:mb-6">Students</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-12">
        {state.students ? (
          state.students.map((student, index) => (
            <div
              key={index}
              className="flex bg-blue-fifty items-center w-full space-x-4 focus-ring"
            >
              <img src={student.avatar} alt={student.name} className="rounded-full w-14 h-14" />
              <div className="flex flex-col items-start flex-1 text-sm">
                <span className="font-bold dark-nine ">{student.name}</span>
                <span className="text-sm font-bold dark-eight opacity-50">View profile</span>
              </div>
            </div>
          ))
        ) : (
          <h1>No student is assigned</h1>
        )}
      </div>
    </div>
  );
};

export default Student;
