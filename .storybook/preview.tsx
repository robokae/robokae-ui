import { Preview } from "@storybook/react";
import { GlobalStyle } from "../src/components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../src/theme/theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: getTheme("light"),
        dark: getTheme("dark"),
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyle,
    }),
    (Story, context) => {
      const background =
        context.globals.theme === "dark" ? "#11191F" : "#F0F1F2";
      document.body.style.backgroundColor = background;
      return Story();
    },
  ],
};

export default preview;
