/* eslint-disable react/prop-types */
import React from 'react';
import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = Cookies.get('token');
  const email = Cookies.get('user');
  if (token) {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('user', email);
  }
  const user = localStorage.getItem('user');
  return (
    <Route
      {...rest}
      render={(props) => (user ? <Component {...props} /> : <Redirect to={ROUTES.LOGIN} />)}
    />
  );
};

export default PrivateRoute;
