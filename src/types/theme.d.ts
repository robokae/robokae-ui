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
      background: string;
      foreground: {
        primary: string;
        secondary: string;
      };
    };
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
