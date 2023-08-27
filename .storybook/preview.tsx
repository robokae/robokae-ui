import React from "react";
import { ThemeProvider, css } from "styled-components"
import { Decorator } from "@storybook/react"
import { lightTheme, darkTheme } from "../src/config/theme";
import styled from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const ThemeBlock = styled.div(({theme}) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${theme.background};
`);

const withTheme: Decorator = (StoryFn, context) => {
  const {theme} = context.parameters;
  const storyTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={storyTheme}>
      <ThemeBlock>
        <StoryFn />
      </ThemeBlock>
    </ThemeProvider>
  )
};

export const decorators = [withTheme];
