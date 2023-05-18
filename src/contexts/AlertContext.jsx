import { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

const initialState = {
  show: false,
  message: '',
  type: '',
};

export const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState(initialState);

  const showAlert = (message, type) => {
    setAlert({
      show: true,
      message,
      type,
    });
  };

  const hideAlert = () => {
    setAlert(initialState);
  };

  return (
    <AlertContext.Provider value={{ ...alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const UseAlert = () => {
  return useContext(AlertContext);
};
