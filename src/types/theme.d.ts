import "styled-components";

interface ButtonTheme {
  background: string;
  text: string;
  hoverBackground: string;
  hoverText: string;
}

export const ButtonTypes: string = "success" | "info" | "warning" | "disabled";

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      primary: string;
      secondary: string;
    };
    border: string;
    boxShadow: string;
    button: {
      [key in ButtonTypes]: ButtonTheme;
    };
    input: {
      background: string;
      label: string;
      placeholder: string;
    };
    overlay: string;
    status: {
      success: string;
      error: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled?: string;
      error?: string;
    };
    tooltip: {
      background: string;
      foreground: string;
    };
  }
}
