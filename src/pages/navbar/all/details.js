import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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
            <p>{moment(data.dueDate).format('DD-MM-YYYY')}</p>
          </div>
          <div className="flex">
            <p className="dark-nine">published:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>{moment(data.startDate).format('DD-MM-YYYY')}</p>
          </div>
          <div className="flex">
            <p className="dark-nine">points:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>{data.totalMarks} pts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

// propType validation
Details.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};
