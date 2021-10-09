import React, { useState, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDataContext from '../../utilities/context/userData';
import Student from '../student';

const TeachingAssistant = () => {
  const { state } = useContext(UserDataContext);
  const [id, setId] = useState();

  // toggle to show and hide the assign_student of particular selected TA
  const handleToggle = (idx) => {
    if (!id) {
      setId(idx);
    } else {
      setId('');
    }
  };
  return (
    <div className="px-4 py-4 mt-8 bg-white dark:bg-grey-seven rounded-lg large-x-y">
      <ToastContainer />
      <h2 className="mb-4 text-xl font-bold dark-nine lg:mb-6">Teaching Assistant</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-12">
        {state.teaching_assistant ? (
          state.teaching_assistant.map((ta, index) => (
            <>
              <div
                key={index}
                aria-hidden="true"
                className="flex bg-blue-fifty items-center w-full space-x-4 focus-ring"
                onClick={() => handleToggle(ta._id)}
              >
                <img src={ta.avatar} alt={ta.name} className="rounded-full w-14 h-14" />
                <div className="flex flex-col items-start flex-1 text-sm">
                  <span className="font-bold dark-nine ">{ta.name}</span>
                  <span className="text-sm font-bold dark-eight opacity-50">View profile</span>
                </div>
                <span className="status-green">TA</span>
              </div>
              <div className={state.currentNav !== 'ta' && 'hdden'}>
                <Student ta={ta} id={id} setId={setId} />
              </div>
            </>
          ))
        ) : (
          <h1>No Teaching Assistant assigned</h1>
        )}
      </div>
    </div>
  );
};

export default TeachingAssistant;
