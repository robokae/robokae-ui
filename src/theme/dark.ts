import type { DefaultTheme } from "styled-components/dist/types";
import { dark } from "./colors";

export const darkTheme: DefaultTheme = {
  background: {
    primary: dark.background.primary,
    secondary: dark.background.secondary,
  },
  border: dark.border,
  boxShadow: "0.25rem 0.25rem 1rem rgba(2, 10, 18, 0.2)",
  text: {
    primary: dark.text.primary,
    secondary: dark.text.secondary,
    error: dark.status.error,
  },
  button: {
    success: {
      background: "#97DBFB",
      text: dark.text.button.success,
      hoverBackground: "#7EB2CB",
      hoverText: dark.text.button.success,
    },
    info: {
      background: "#587080",
      text: dark.text.button.info,
      hoverBackground: "#485A66",
      hoverText: dark.text.button.info,
    },
  },
  input: {
    background: "#11181C",
    label: "#8D9FAA",
    placeholder: "#4F5B63",
  },
  overlay: "rgba(15, 20, 22, 0.5)",
  status: {
    success: dark.status.success,
    error: dark.status.error,
  },
  tooltip: {
    background: "#2F3A44",
    foreground: "#F8F8F8",
  },
};
