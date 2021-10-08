/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useContext, useState } from 'react';
import notify from '../../../components/public/notification';
import { assignTA } from '../../../services/user';
import UserDataContext from '../../../utilities/context/userData';

const AssignAssignment = ({ assignment, id }) => {
  const { state } = useContext(UserDataContext);
  const [selectedTA, setSelectedTA] = useState([]);
  console.log('selected Ta', selectedTA);

  // check and uncheck the checkbox according to admin needs
  const handleCheckbox = (id) => {
    const duplicate = selectedTA.includes(id);
    // uncheck the checkbox
    if (duplicate) {
      selectedTA.splice(selectedTA.indexOf(id), 1);
    } else {
      // check the checkbox
      setSelectedTA((prev) => [...prev, id]);
    }
  };

  const handleAdd = async () => {
    try {
      console.log('datatat', selectedTA);
      const data = {
        ta_id: selectedTA,
        assignmentId: id
      };
      const response = await assignTA(data);
      notify(response);
    } catch (err) {
      console.log(err);
    }
  };

  // Initially check the checkbox for already assigned TA to an assignment.
  useEffect(() => {
    if (assignment._id === id) {
      // update the selectedStudent array for particular TA
      setSelectedTA(assignment.assigned_TA);
    }
    if (id === '') {
      // if no TA is selected by admin then empty the selectedStudent array
      setSelectedTA([]);
    }
  }, [id]);

  return (
    <div className="px-4 py-4 mt-8 bg-white dark:bg-grey-seven rounded-lg large-x-y">
      <h2 className="mb-4 text-xl font-bold dark-nine lg:mb-6">Teaching Assistant</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-12">
        {state.teaching_assistant ? (
          state.teaching_assistant.map((ta, index) => (
            <>
              <div
                key={index}
                aria-hidden="true"
                className="flex bg-blue-fifty items-center w-full space-x-4 focus-ring"
                // onClick={() => handleToggle(ta._id)}
              >
                <img src={ta.avatar} alt={ta.name} className="rounded-full w-14 h-14" />
                <div className="flex flex-col items-start flex-1 text-sm">
                  <span className="font-bold dark-nine ">{ta.name}</span>
                  <span className="text-sm font-bold dark-eight opacity-50">View profile</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    defaultChecked={!!ta.user_ref_id.assignment.includes(id)}
                    className="task-completed"
                    onChange={() => handleCheckbox(ta._id)}
                  />
                </div>
              </div>
            </>
          ))
        ) : (
          <h1>No Teaching Assistant assigned</h1>
        )}
      </div>
      <button type="submit" className="btn bg-green-five" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AssignAssignment;
