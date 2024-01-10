import { createContext, useMemo } from "react";
import { useColorScheme } from "react-native";
import { LightColors, DarkColors } from "../Colors";

const initialState = {
  dark: false,
  colors: LightColors,
};

export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();

  const isDarkMode = useMemo(() => colorScheme === "dark", [colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        dark: isDarkMode,
        colors: isDarkMode ? DarkColors : LightColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
