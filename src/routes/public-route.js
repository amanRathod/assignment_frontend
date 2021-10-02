/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const PublicRoute = ({ component: Component, ...rest }) => {
  const user = false;
  return (
    <Route
      {...rest}
      render={(props) => (user ? <Redirect to={ROUTES.HOME} /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
