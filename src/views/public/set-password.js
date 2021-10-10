/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as ROUTES from '../../constants/routes';
import FormInputPassword from '../../components/input/password';
import ValidateConfirmPassword from '../../utilities/validation/confirm-password';
import notify from '../../components/public/notification';
import { UserResetPassword } from '../../services/auth';
import ValidatePassword from '../../utilities/validation/password';

const SetPasswordView = () => {
  const { token } = useParams();
  const history = useHistory();
  const [state, setState] = useState({
    password: '',
    confirmPassword: '',
    error2: '',
    error3: '',
    token
  });

  const isInputEmpty =
    state.password === '' ||
    state.confirmPassword === '' ||
    state.error2 !== '' ||
    state.error3 !== '';

  function handleChange(e) {
    e.persist();
    switch (e.target.name) {
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
  }

  const _handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await UserResetPassword(state);
      state.password = '';
      notify(response);
    } catch (error) {
      console.log(error);
      notify({
        type: 'error',
        message: error.message
      });
    }
  };

  return (
    <div className="box1 h-screen bg-gradient">
      <ToastContainer />
      <form onSubmit={_handleSubmit} className="box2 col card-rounded bg-white">
        <fieldset>
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
          className={`btn ${isInputEmpty && 'opacity-70 cursor-not-allowed'}`}
          onClick={_handleSubmit}
        >
          Submit
        </button>
        <div className="text-center text-color mt-4 underline">
          <Link to={ROUTES.LOGIN}>Back to login</Link>
        </div>
      </form>
    </div>
  );
};

export default SetPasswordView;
