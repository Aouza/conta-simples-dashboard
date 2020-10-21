import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userLogado, setUserLogado] = useState({});
  const [transactions, setTransactions] = useState([]);

  return (
    <UserContext.Provider
      value={{
        userLogado,
        setUserLogado,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
