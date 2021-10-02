/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = false;
  return (
    <Route
      {...rest}
      render={(props) => (user ? <Component {...props} /> : <Redirect to={ROUTES.LOGIN} />)}
    />
  );
};

export default PrivateRoute;
