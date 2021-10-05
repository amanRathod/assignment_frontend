/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../utilities/context/user';

const PublicRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('user');
  const userType = localStorage.getItem('user_type');
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to={`/${userType}/dashboard`} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
