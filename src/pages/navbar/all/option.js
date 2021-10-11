/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import UserDataContext from '../../../utilities/context/userData';
import EditAssignment from './edit-assignment';
import AssignAssignment from './assign-assignment';
import notify from '../../../components/public/notification';

const Option = ({ data, id, setId }) => {
  const { state, dispatch } = useContext(UserDataContext);
  const [currentOption, setCurrentOption] = useState('');

  useEffect(() => {
    if (id === '') {
      setCurrentOption('');
    } else if (data._id === id) {
      dispatch({
        type: 'gradeSubmittedAssignment',
        fieldName: 'gradeSubmittedAssignment',
        payload: data.submission
      });
    }
  }, [id]);

  const handleOption = (value) => {
    if (data.assigned_TA[0]) {
      notify({
        type: 'warning',
        message: 'TA is already assigned to this assignment'
      });
    } else {
      setCurrentOption(value);
    }
  };

  return (
    <div className={data._id === id && state.userType === 'Admin' ? 'visible' : 'hidden'}>
      <h1>Option</h1>
      <button
        className="btn"
        type="submit"
        aria-hidden="true"
        onClick={() => handleOption('assign')}
      >
        Assign TA
      </button>
      <button
        className="btn bg-green-five"
        type="submit"
        aria-hidden="true"
        onClick={() => setCurrentOption('edit')}
      >
        Edit
      </button>
      <button
        className="btn bg-red-five"
        type="submit"
        aria-hidden="true"
        onClick={() => dispatch({ type: 'currentNav', fieldName: 'currentNav', payload: 'grade' })}
      >
        View reports
      </button>
      {currentOption === 'assign' && <AssignAssignment assignment={data} id={id} setId={setId} />}
      {currentOption === 'edit' && <EditAssignment assignment={data} />}
    </div>
  );
};
export default Option;
