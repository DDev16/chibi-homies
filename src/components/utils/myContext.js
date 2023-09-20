// MyContext.js
import { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [myValue, setMyValue] = useState('Default Value'); // Initialize your context state

  const updateValue = (newValue) => {
    setMyValue(newValue);
  };

  // Provide the context value to its children
  const contextValue = {
    myValue,
    updateValue,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export { MyContext, MyContextProvider };
