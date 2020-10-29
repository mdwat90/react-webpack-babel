import React, { useState } from 'react';

interface RightDrawerProps {
  value: any;
  setValue: (num: number) => void;
}

export const RightDrawerContext = React.createContext({} as RightDrawerProps);

export const RightDrawerProvider = ({ children }: any) => {
  const [value, setValue] = useState(0);
  return (
    <RightDrawerContext.Provider value={{ value, setValue }}>
      {children}
    </RightDrawerContext.Provider>
  );
};
