import type { DefaultTheme } from "styled-components/dist/types";
import { light } from "./colors";

export const lightTheme: DefaultTheme = {
  background: {
    primary: light.background.primary,
    secondary: light.background.secondary,
  },
  border: light.border,
  boxShadow: "0.5rem 0.5rem 1rem rgba(153, 174, 215, 0.2)",
  button: {
    success: {
      background: "#6F8FA6",
      text: light.text.button.info,
      hoverBackground: "#446075",
      hoverText: light.text.button.info,
    },
    info: {
      background: "#455661",
      text: light.text.button.success,
      hoverBackground: "#2B363D",
      hoverText: light.text.button.success,
    },
  },
  text: {
    primary: light.text.primary,
    secondary: light.text.secondary,
    error: light.status.error,
  },
  input: {
    background: "#F2F3F3",
    label: "#6D818F",
    placeholder: "#8D9FAA",
  },
  overlay: "rgba(18, 28, 32, 0.5)",
  status: {
    success: light.status.success,
    error: light.status.error,
  },
  tooltip: {
    background: "#52606B",
    foreground: "#EBEDEF",
  },
};
