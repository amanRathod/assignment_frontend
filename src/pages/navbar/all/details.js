/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import UserDataContext from '../../../utilities/context/userData';

const Details = ({ data, id }) => {
  const history = useHistory();
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
    <div className={`${data._id === id ? 'visible' : 'hidden'} `}>
      <h1>Details</h1>
      <div className="flex-col m-4">
        <div className="flex">
          <p>{state.students.length} assigned</p>
          <p className="text-gray-base">&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <p onClick={handleSubmit} aria-hidden="true" className="cursor-pointer underline">
            {data.submission.length} submitted
          </p>
        </div>
        <div className="flex-col">
          <div className="flex">
            <p>file:</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <a target="_blank" href={data.filePath} className="underline" rel="noreferrer">
              {data.filePath}
            </a>
          </div>
          <div className="flex">
            <p>Due:</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p>{data.dueDate}</p>
          </div>
          <div className="flex">
            <p>published:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>{data.startDate}</p>
          </div>
          <div className="flex">
            <p>points:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>{data.totalMarks}</p>
          </div>
          <div className="flex">
            <p>Graded:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
