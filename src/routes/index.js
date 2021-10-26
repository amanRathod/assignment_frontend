import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Theme from '../constants/theme';
import ThemeContext from '../utilities/context/theme';
import UserAuthListener from '../constants/user-auth-listener';
import UserContext from '../utilities/context/user';
import renderLoader from '../utilities/objects/loader';

const PrivateRoute = lazy(() => import('./private-route'));
const PublicRoute = lazy(() => import('./public-route'));

const Login = lazy(() => import('../views/public/login'));
const Home = lazy(() => import('../views/public/home'));
const Register = lazy(() => import('../views/public/register'));
const ForgotPassword = lazy(() => import('../views/public/forgot-password'));
const ResetPassword = lazy(() => import('../views/public/set-password'));
const Dashboard = lazy(() => import('../views/private/dashboard'));
const PersonalDetails = lazy(() => import('../views/private/personal-details'));

const App = () => {
  const user = UserAuthListener();
  const { theme, setTheme } = Theme();
  return (
    <UserContext.Provider value={{ user }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <Suspense fallback={renderLoader()}>
            <Switch>
              <PublicRoute exact path={ROUTES.LOGIN} component={Login} />
              <PublicRoute exact path={ROUTES.HOME} component={Home} />
              <PublicRoute exact path={ROUTES.REGISTER} component={Register} />
              <PublicRoute exact path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
              <PublicRoute exact path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
              <PrivateRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
              <PrivateRoute exact path={ROUTES.PERSONAL_DETAILS} component={PersonalDetails} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
