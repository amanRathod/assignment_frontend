/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import * as ROUTES from '../../constants/routes';
import FormInputName from '../../components/input/name';
import Date from '../../components/input/date';
import FormInputNumber from '../../components/input/number';
import details from '../../asserts/images/details.svg';
import { UserUpdate, GoogleUserUpdate } from '../../services/user';

const PersonalDetails = () => {
  const history = useHistory();
  const [state, setState] = useState({
    institute: '',
    userType: '',
    registration_no: '',
    dateOfBirth: '',
    phone: ''
  });

  const userAuth = Cookies.get('user');

  const isInputEmpty =
    state.institute === '' ||
    state.registration_no === '' ||
    state.dateOfBirth === '' ||
    state.phone === '';

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const _handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await UserUpdate(state);
      if (response.type === 'success') {
        history.push(ROUTES.DASHBOARD);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleUser = async (e) => {
    try {
      e.preventDefault();
      const response = await GoogleUserUpdate(state);
      if (response.type === 'success') {
        localStorage.setItem('user_type', response.data);
        history.push(ROUTES.DASHBOARD);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = 'Personal Details';
  }, []);
  return (
    <>
      <div className="grid-element h-screen">
        <div className="box1 col-span-2 m-5">
          <img
            rel="preload"
            src="https://bucket-007.s3.ap-south-1.amazonaws.com/book-right-and-wrong-by-oblik-studio.svg"
            alt="details"
          />
        </div>
        <div className="box1 col-span-2 ">
          <form className="box2">
            <div className="text-2xl font-semibold">Personal Details</div>
            <div className="form-group">
              <label htmlFor="institute">Institute</label>
              <FormInputName value={state.institute} handleChange={handleChange} name="institute" />
            </div>
            <div className={userAuth ? 'visible' : 'hidden'}>
              <div>
                <label htmlFor="userType">Role</label>
              </div>
              <select className="input-control" name="userType" onBlur={handleChange} required>
                <option value="Student">Student</option>
                <option value="Admin">Admin</option>
                <option value="TA">Teaching Assistant</option>
              </select>
            </div>
            <div>
              <label htmlFor="Registration No">Registration No.</label>
              <FormInputNumber
                value={state.registration_no}
                handleChange={handleChange}
                name="registration_no"
              />
            </div>
            <div>
              <label htmlFor="DOB">Date of Birth</label>
              <Date value={state.dateOfBirth} handleChange={handleChange} name="dateOfBirth" />
            </div>
            <div>
              <label htmlFor="Phone No">Phone No.</label>
              <FormInputNumber value={state.phone} handleChange={handleChange} name="phone" />
            </div>
            <div className="button">
              <button
                onClick={userAuth ? handleGoogleUser : _handleSubmit}
                type="submit"
                className={`btn ${isInputEmpty && 'opacity-70 cursor-not-allowed'}`}
                disabled={isInputEmpty}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
