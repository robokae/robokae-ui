import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    accent: string;
    background: {
      primary: string;
      secondary: string;
    };
    boxShadow: string;
    button: {
      primary: {
        background: string;
        foreground: {
          primary: string;
          secondary: string;
        };
      };
      accent: {
        background: string;
        foreground: {
          primary: string;
          secondary: string;
        };
      };
      hover: string;
    };
    error: string;
    input: {
      background: string;
      label: string;
      placeholder: string;
    };
    line: string;
    overlay: string;
    text: {
      primary: string;
      secondary: string;
    };
    tooltip: {
      background: string;
      foreground: string;
    };
  }
}
