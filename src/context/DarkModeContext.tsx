import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type childrenProps = {
  children: ReactNode;
};

interface IThemeContext {
  darkMode: boolean;
  toggleDarkMode?: () => void;
}

const defaultState = {
  darkMode: false,
};

const DarkModeContext = createContext<IThemeContext>(defaultState);

export default function DarkModeProvider({ children }: childrenProps) {
  const [darkMode, setDarkMode] = useState(defaultState.darkMode);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
