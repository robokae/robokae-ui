import { Meta } from "@storybook/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../config/theme";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Robokae/Button",
  argTypes: {},
};

export default meta;

export const LightTheme = (args) => (
  <ThemeProvider theme={lightTheme}>
    <Button data-testid="Button-id" {...args}>
      Click me
    </Button>
  </ThemeProvider>
);

LightTheme.args = {
  variant: "filled",
};

export const DarkTheme = (args) => (
  <ThemeProvider theme={darkTheme}>
    <Button data-testid="Button-id" {...args}>
      Click me
    </Button>
  </ThemeProvider>
);

DarkTheme.args = {
  variant: "filled",
};

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
