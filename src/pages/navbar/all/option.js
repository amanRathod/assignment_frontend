/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import UserDataContext from '../../../utilities/context/userData';
import EditAssignment from './edit-assignment';
import TA from '../../ta';
import AssignAssignment from './assign-assignment';

const Option = ({ data, id, setId }) => {
  const { state } = useContext(UserDataContext);
  const [currentOption, setCurrentOption] = useState('');

  useEffect(() => {
    if (id === '') {
      setCurrentOption('');
    }
  }, [id]);

  return (
    <div className={data._id === id && state.userType === 'Admin' ? 'visible' : 'hidden'}>
      <h1>Option</h1>
      <button
        className="btn"
        type="submit"
        aria-hidden="true"
        onClick={() => setCurrentOption('assign')}
      >
        Assign TA
      </button>
      <button
        className="btn"
        type="submit"
        aria-hidden="true"
        onClick={() => setCurrentOption('edit')}
      >
        Edit
      </button>
      {currentOption === 'assign' && <AssignAssignment assignment={data} id={id} setId={setId} />}
      {currentOption === 'edit' && <EditAssignment assignment={data} />}
    </div>
  );
};
export default Option;
