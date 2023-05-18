import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext();

const getDefaultTheme = () => {
  const saveTheme = localStorage.getItem('theme');
  return saveTheme ? saveTheme : 'light';
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme());

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UseTheme = () => {
  return useContext(ThemeContext);
};
