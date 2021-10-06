/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../utilities/context/user';
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
