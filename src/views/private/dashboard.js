/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useReducer } from 'react';
import MobileBar from '../../pages/dashboard/mobile-bar';
import Sidebar from '../../pages/dashboard/sidebar';
import Dashboard from '../../pages/dashboard';
import UserDataContext from '../../utilities/context/userData';
import { GetStudentData, GetTAData, GetAdminData } from '../../services/user';

const DashboardView = () => {
  const [toggle, setToggle] = useState(true);
  let userType = localStorage.getItem('user_type');
  console.log('user user', userType);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'name': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'registration_no': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'teaching_assistant': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'assignment': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'avatar': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'phone': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'institute': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'students': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'userType': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'currentNav': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'submittedAssignment': {
        return { ...state, [action.fieldName]: action.payload };
      }
      case 'gradeSubmittedAssignment': {
        return { ...state, [action.fieldName]: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const InitialState = {
    name: '',
    registration_no: '',
    phone: '',
    institute: '',
    avatar: '',
    userType: '',
    submittedAssignment: [],
    currentNav: 'all',
    assignment: [],
    teaching_assistant: [],
    submissions: [],
    students: [],
    gradeSubmittedAssignment: []
  };

  const [state, dispatch] = useReducer(reducer, InitialState);
  console.log(state);

  const fetchData = async () => {
    try {
      // get logged-In user Data
      let response;
      if (state.userType) userType = state.userType;
      if (userType === 'Student') {
        response = await GetStudentData();
      } else if (userType === 'TA') {
        response = await GetTAData();
      } else {
        response = await GetAdminData();
      }

      // destructure response data
      const { data, ta, assignments, submissions, students } = response;
      // store the response data to their respective state
      dispatch({ type: 'name', fieldName: 'name', payload: data.name });
      dispatch({
        type: 'registration_no',
        fieldName: 'registration_no',
        payload: data.registration_no
      });
      dispatch({ type: 'institute', fieldName: 'institute', payload: data.institute });
      dispatch({ type: 'assignment', fieldName: 'assignment', payload: assignments });
      dispatch({ type: 'avatar', fieldName: 'avatar', payload: data.avatar });
      dispatch({
        type: 'teaching_assistant',
        fieldName: 'teaching_assistant',
        payload: ta
      });
      dispatch({
        type: 'submittedAssignment',
        fieldName: 'submittedAssignment',
        payload: submissions
      });
      dispatch({ type: 'students', fieldName: 'students', payload: students });
      dispatch({ type: 'userType', fieldName: 'userType', payload: data.user_type });
      dispatch({ type: 'phone', fieldName: 'phone', payload: data.phone });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = 'Dashboard';
    fetchData();
    // update data for every 10 second
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col min-h-screen dark:bg-darkMode-primary text-base subpixel-antialiased font-semibold dark-eight lg:flex-row">
      <UserDataContext.Provider value={{ state, dispatch }}>
        <MobileBar toggle={toggle} setToggle={setToggle} />
        <Sidebar toggle={toggle} />
        <Dashboard />
      </UserDataContext.Provider>
    </div>
  );
};

export default DashboardView;
