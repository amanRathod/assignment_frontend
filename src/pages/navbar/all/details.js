/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import UserDataContext from '../../../utilities/context/userData';

const Details = ({ data, id }) => {
  const { state, dispatch } = useContext(UserDataContext);

  const handleSubmit = () => {
    dispatch({
      type: 'gradeSubmittedAssignment',
      fieldName: 'gradeSubmittedAssignment',
      payload: data.submission
    });
    dispatch({ type: 'currentNav', fieldName: 'currentNav', payload: 'grade' });
  };
  return (
    <div className={`${data._id === id && state.userType === 'TA' ? 'visible' : 'hidden'} `}>
      <h1>Details</h1>
      <div className="flex-col m-4">
        <div className="flex">
          <p>{state.students ? state.students.length : 0} assigned</p>
          <p className="text-gray-base">&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <p onClick={handleSubmit} aria-hidden="true" className="cursor-pointer underline">
            {data.submission.length} submitted
          </p>
        </div>
        <div className="flex-col">
          <div className="flex">
            <p className="dark-nine">file:</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <a target="_blank" href={data.filePath} className="underline" rel="noreferrer">
              {data.filePath}
            </a>
          </div>
          <div className="flex">
            <p className="dark-nine">Due:</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p>{data.dueDate}</p>
          </div>
          <div className="flex">
            <p className="dark-nine">published:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>{data.startDate}</p>
          </div>
          <div className="flex">
            <p className="dark-nine">points:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>{data.totalMarks}</p>
          </div>
          <div className="flex">
            <p className="dark-nine">Graded:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
