import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

const App: React.FC = (): any => {
  return (
    <div>
      <h1>YAY! It's working!</h1>
    </div>
  );
};

export default hot(module)(App);
