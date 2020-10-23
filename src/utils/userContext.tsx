import React, { useState } from 'react';

interface UserContextProps {
  user: any;
  setUserDetails: (user: object) => void;
}

export const UserContext = React.createContext({} as UserContextProps);

export const UserProvider = ({ children }: any) => {
  const [user, setUserDetails] = useState(localStorage);
  return (
    <UserContext.Provider value={{ user, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
