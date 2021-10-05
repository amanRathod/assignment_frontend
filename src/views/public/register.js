/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInputEmail from '../../components/input/email';
import FormInputPassword from '../../components/input/password';
import FormInputName from '../../components/input/name';
import ValidateEmail from '../../utilities/validation/email';
import ValidatePassword from '../../utilities/validation/password';
import ValidateConfirmPassword from '../../utilities/validation/confirm-password';
import { UserRegister } from '../../services/auth';
import notify from '../../components/public/notification';
import Registration from '../../asserts/images/Registration.svg';

export default function RegisterView() {
  const [state, setState] = useState({
    name: '',
    user_type: '',
    email: '',
    password: '',
    confirmPassword: '',
    error1: '',
    error2: '',
    error3: ''
  });
  const isInputEmpty =
    state.name === '' ||
    state.user_type === '' ||
    state.email === '' ||
    state.password === '' ||
    state.confirmPassword === '' ||
    state.error1 !== '' ||
    state.error2 !== '' ||
    state.error3 !== '';

  const handleChange = (e) => {
    e.persist();
    switch (e.target.name) {
      case 'email':
        ValidateEmail({ value: e.target.value, setState });
        break;
      case 'password':
        ValidatePassword({ value: e.target.value, setState });
        break;
      case 'confirmPassword':
        ValidateConfirmPassword({ value: e.target.value, setState, password: state.password });
        break;
      default:
        break;
    }
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserRegister(state);
      notify(response || {});
      state.name = '';
      state.user_type = '';
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
    } catch (err) {
      console.log(err);
      notify(err);
    }
  };

  return (
    <div className="box1 h-screen bg-gradient">
      <ToastContainer />
      <form onSubmit={_handleSubmit} className="box2 bg-white">
        <img src={Registration} alt="Register" className="h-16 w-16" />
        <fieldset>
          <div>
            <div>
              <label htmlFor="name">Full Name</label>
            </div>
            <FormInputName value={state.name} handleChange={handleChange} name="name" />
          </div>
          <div>
            <div>
              <label htmlFor="user_type">Role</label>
            </div>
            <select className="input-control" name="user_type" onBlur={handleChange} required>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="TA">Teaching Assistant</option>
            </select>
          </div>
          <div>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <FormInputEmail value={state.email} handleChange={handleChange} />
            {state.error1 && <p className="error -pt-6">{state.error1}</p>}
          </div>
          <div>
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <FormInputPassword value={state.password} handleChange={handleChange} />
            {state.error2 && <p className="error">{state.error2}</p>}
          </div>
          <div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <input
              type="password"
              name="confirmPassword"
              value={state.confirmPassword}
              className="input-control"
              onChange={handleChange}
              required
            />
            {state.error3 && <p className="error">{state.error3}</p>}
          </div>
        </fieldset>
        <button
          disabled={isInputEmpty}
          type="submit"
          className={`btn ${isInputEmpty && 'opacity-70  cursor-not-allowed'}`}
        >
          Register
        </button>
        <p className="break-normal mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-color ">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
