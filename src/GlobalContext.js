import React from 'react';

export const GlobalContext = React.createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <GlobalContext.Provider value={{ opened, setOpened }}>
      {children}
    </GlobalContext.Provider>
  );
};
