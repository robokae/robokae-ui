import React, { type PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

interface ThemeProviderProps {
  theme?: "light" | "dark";
}

export const ThemeProvider: React.FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  theme = "light",
}) => {
  return (
    <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </StyledThemeProvider>
  );
};
