import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const value = "Hello from context!";

  return (
    <MyContext.Provider value={{
         value
    }}>
      {children}
    </MyContext.Provider>
  );
};
