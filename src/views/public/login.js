/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as ROUTES from '../../constants/routes';
import FormInputEmail from '../../components/input/email';
import FormInputPassword from '../../components/input/password';
import ValidateEmail from '../../utilities/validation/email';
import { UserLogin } from '../../services/auth';
import notify from '../../components/public/notification';
import UserSecurity from '../../asserts/images/UserSecurity.svg';

export default function LoginView() {
  const [state, setState] = useState({
    email: '',
    password: '',
    error1: '',
    error2: ''
  });

  const isInputEmpty = state.email === '' || state.password === '';
  const history = useHistory();

  const handleChange = (e) => {
    e.persist();
    if (e.target.name === 'email') {
      ValidateEmail({ value: e.target.value, setState });
    }
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserLogin(state);
      notify(response);
      if (response.type === 'success') {
        localStorage.setItem('user', response.email);
        localStorage.setItem('user_type', response.user_type);
        localStorage.setItem('accessToken', response.token);
        console.log(response);
        if (response.bool === false) {
          history.push(ROUTES.PERSONAL_DETAILS);
        } else {
          history.push(ROUTES.DASHBOARD);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div className="box1 h-screen bg-gradient">
      <ToastContainer />
      <form className="box2 bg-white">
        <img
          src="https://bucket-007.s3.ap-south-1.amazonaws.com/User+Security.svg"
          alt="svg"
          className="h-16 w-16"
        />
        <fieldset>
          <div>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <FormInputEmail value={state.email} handleChange={handleChange} />
            {state.error1 && <p className="error">{state.error1}</p>}
          </div>
          <div>
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <FormInputPassword value={state.password} handleChange={handleChange} />
          </div>
        </fieldset>

        <p className="pl-48 underline">
          <Link to="/forgot-password" className="text-color">
            forgot password
          </Link>
        </p>
        <div className="button">
          <button
            type="submit"
            onClick={_handleSubmit}
            className={`btn ${isInputEmpty && 'opacity-70 cursor-not-allowed'}`}
            disabled={isInputEmpty}
          >
            Login
          </button>
        </div>
        <p className="mt-4">or Login with</p>
        <button type="submit" className="text-white bg-red-secondary btn">
          <a href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle&client_id=845801222492-g34p0uiarsilajl4bf0uqolj2smg9do6.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email">
            Google
          </a>
        </button>
        <p className="mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-color">
            Singup
          </Link>
        </p>
      </form>
    </div>
  );
}
