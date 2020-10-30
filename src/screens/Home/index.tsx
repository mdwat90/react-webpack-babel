import React from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import Navbar from './components/Navbar';
import DashboardStyles from '../Dashboard/DashboardStyles';

import 'firebase/auth';
import { connect } from 'react-redux';

interface DashboardProps extends RouteComponentProps {
  authenticated: any;
  children?: any;
}

const Home = ({ authenticated, children, ...rest }: DashboardProps) => {
  const classes = DashboardStyles();

  const localStorageUID = localStorage.getItem('bulletinUID');

  if (!localStorageUID && !authenticated) {
    return <Redirect noThrow to="auth" />;
  }

  return (
    <div className={classes.dashContainer}>
      <div>
        <Navbar {...rest} />
      </div>
      {children}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const {
    authReducer: { authenticated },
  } = state;
  return {
    authenticated: authenticated,
  };
};

export default connect(mapStateToProps)(Home);
