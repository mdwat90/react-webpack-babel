import React, { useState } from 'react';

interface UserContextProps {
  user: any;
  setUserDetails: (user: object) => void;
  loading: any;
  setLoading: (bool: boolean) => void;
}

export const UserContext = React.createContext({} as UserContextProps);

export const UserProvider = ({ children }: any) => {
  const [user, setUserDetails] = useState(localStorage);
  const [loading, setLoading] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUserDetails, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
