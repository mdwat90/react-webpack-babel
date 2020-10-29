import React from 'react';
import { NavBarProvider } from './navBarContext';
import { RightDrawerProvider } from './rightDrawerContext';
import { UserProvider } from './userContext';

const CombinedProviders = ({ children }: any) => {
  return (
    <UserProvider>
      <NavBarProvider>
        <RightDrawerProvider>{children}</RightDrawerProvider>
      </NavBarProvider>
    </UserProvider>
  );
};

export default CombinedProviders;
