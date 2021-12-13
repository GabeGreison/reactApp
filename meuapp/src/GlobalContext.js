import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ nome: "Gabriel" }}>
      {children}
    </GlobalContext.Provider>
  );
};
