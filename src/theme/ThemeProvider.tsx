import React, { type PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, getTheme, lightTheme } from "./theme";
import { useWebFonts } from "../hooks/useWebFonts";
import { typography } from "../constants";

interface ThemeProviderProps {
  theme?: "light" | "dark";
}

export const ThemeProvider: React.FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  theme = "light",
}) => {
  useWebFonts(typography.fontFamilies);
  return (
    <StyledThemeProvider theme={getTheme(theme)}>
      {children}
    </StyledThemeProvider>
  );
};
