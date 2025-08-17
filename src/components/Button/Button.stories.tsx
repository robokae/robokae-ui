import { Meta } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
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
