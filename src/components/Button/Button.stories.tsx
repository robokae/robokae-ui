import { Meta } from "@storybook/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../config/theme";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Robokae/Button",
  decorators: [
    (Story, context) => (
      <ThemeProvider
        theme={
          context.parameters.backgrounds?.default === "dark"
            ? darkTheme
            : lightTheme
        }
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outline", "plain"],
    },
    rounded: {
      control: "boolean",
    },
    arrow: {
      control: "boolean",
    },
    children: {
      control: "text",
      description: "Button text",
    },
  },
};

export default meta;

const Template = (args) => <Button {...args}>{args.children}</Button>;

const defaultArgs = {
  variant: "filled",
  rounded: false,
  children: "Click me",
  arrow: false,
};

export const LightTheme = Template.bind({});
LightTheme.args = defaultArgs;

export const DarkTheme = Template.bind({});
DarkTheme.args = defaultArgs;

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
