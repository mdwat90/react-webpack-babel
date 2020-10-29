import React, { useState } from 'react';

interface NavBarProps {
  openLeft: any;
  setOpenLeft: (bool: boolean) => void;
  openRight: any;
  setOpenRight: (bool: boolean) => void;
}

export const NavBarContext = React.createContext({} as NavBarProps);

export const NavBarProvider = ({ children }: any) => {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(true);
  return (
    <NavBarContext.Provider
      value={{ openLeft, setOpenLeft, openRight, setOpenRight }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
