/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInputName from '../../components/input/name';
import Date from '../../components/input/date';
import FormInputNumber from '../../components/input/number';
import details from '../../asserts/images/details.svg';
import { UserUpdate } from '../../services/user';
import notify from '../../components/public/notification';

const PersonalDetails = () => {
  const history = useHistory();
  const [state, setState] = useState({
    institute: '',
    registration_no: '',
    dateOfBirth: '',
    phone: ''
  });

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
      notify(response);
      if (response.type === 'success') {
        history.push(`/${response.data}/dashboard`);
      }
    } catch (error) {
      console.log(error);
      notify(error);
    }
  };

  useEffect(() => {
    document.title = 'Personal Details';
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="grid-element h-screen">
        <div className="box1 col-span-2 m-5">
          <img
            rel="preload"
            src={details}
            alt="details"
            srcSet={`${details} 300w, ${details} 600w `}
            className="h-180 w-105 md:h-138 md:w-235 lg:h-248 lg:w-245"
          />
        </div>
        <div className="box1 col-span-2">
          <form onSubmit={_handleSubmit} className="box2">
            <div className="text-2xl font-semibold">Personal Details</div>
            <div className="form-group">
              <label htmlFor="institute">Institute</label>
              <FormInputName value={state.institute} handleChange={handleChange} name="institute" />
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
