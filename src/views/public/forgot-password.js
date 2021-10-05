/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../components/public/notification';
import ValidateEmail from '../../utilities/validation/email';
import FormInputEmail from '../../components/input/email';
import { UserForgotPassword } from '../../services/auth';

const ForgotPassword = () => {
  const [state, setState] = useState({
    email: '',
    error1: ''
  });
  const isInputEmpty = state.email === '';

  const handleChange = (e) => {
    e.persist();
    ValidateEmail({ value: e.target.value, setState });
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const _handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await UserForgotPassword(state);
      notify(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="box1 h-screen">
      <ToastContainer />
      <form onSubmit={_handleSubmit} className="box2 bg-white">
        <fieldset>
          <div>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <FormInputEmail value={state.email} handleChange={handleChange} />
            {state.error1 && <p className="error">{state.error1}</p>}
          </div>
        </fieldset>
        <button
          disabled={isInputEmpty}
          type="submit"
          className={`btn ${isInputEmpty && 'opacity-70 cursor-not-allowed'}`}
          onClick={_handleSubmit}
        >
          Submit
        </button>
        <div className="text-center text-color mt-4 underline">
          <Link to="/login">Back to login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
