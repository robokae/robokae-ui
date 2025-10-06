import { Meta, StoryFn } from "@storybook/react-webpack5";
import Button, { Props } from "./Button";

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

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

const defaultArgs: Partial<Props> = {
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
