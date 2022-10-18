import { createContext, useContext, useState } from "react";

const AppTheme = {
  light: {
    textColor: "#000",
    backgroundColor: "#fff",
  },
  dark: {
    textColor: "#fff",
    backgroundColor: "#333",
  },
};

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const currentTheme = AppTheme[theme];

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return context;
}

export { ThemeProvider, useTheme };
