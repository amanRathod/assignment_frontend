/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const PublicRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('user');
  return (
    <Route
      {...rest}
      render={(props) => (user ? <Redirect to={ROUTES.DASHBOARD} /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
