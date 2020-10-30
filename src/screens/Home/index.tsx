import { Redirect, RouteComponentProps } from '@reach/router';
import React from 'react';
import Navbar from '../../components/Navbar';
import HomeStyles from './HomeStyles';

interface HomeProps extends RouteComponentProps {
  children?: any;
}

const Home = ({ children, ...rest }: HomeProps) => {
  const classes = HomeStyles();

  console.log('HOME CHILDREN', children);

  return (
    <div className={classes.dashContainer}>
      <div>
        <Navbar {...rest} />
      </div>
      <div className={classes.contentContainer}>{children}</div>
    </div>
  );
};

export default Home;
