import React, { useContext } from 'react';
import Student from '../student/student-all';
import TA from '../ta';
import Topbar from './topbar';
import Action from './action';
import All from '../navbar/all';
import Open from '../navbar/open';
import Complete from '../navbar/complete';
import Missing from '../navbar/missing';
import Grade from '../navbar/open/grade';
import Create from '../navbar/create';
import Assign from '../navbar/assign';
import UserDataContext from '../../utilities/context/userData';

const Dashboard = () => {
  const { state } = useContext(UserDataContext);
  const actionBar = ['all', 'open', 'complete', 'missing', 'create', 'assign'];

  return (
    <div className="flex flex-col flex-1 px-4 py-4 overflow-hidden bg-blue-fifty dark:bg-darkMode-primary lg:py-8 lg:px-6 xl:px-8">
      <Topbar />
      {actionBar.includes(state.currentNav) && (
        <>
          <Action />
          {state.currentNav === 'all' && <All />}
          {state.currentNav === 'open' && <Open />}
          {state.currentNav === 'complete' && <Complete />}
          {state.currentNav === 'missing' && <Missing />}
          {state.currentNav === 'create' && <Create />}
          {state.currentNav === 'assign' && <Assign />}
        </>
      )}
      {state.currentNav === 'grade' && <Grade />}
      {state.currentNav === 'student' && <Student />}
      {state.currentNav === 'ta' && <TA />}
    </div>
  );
};

export default Dashboard;
