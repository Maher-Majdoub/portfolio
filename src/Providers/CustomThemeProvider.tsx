import { ThemeProvider } from "@emotion/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { darkTheme, lightTheme } from "../utils/theme";

interface Props {
  children: ReactNode;
}

const ThemeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

const CustomThemeProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") setIsDarkMode(false);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
