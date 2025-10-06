import { Meta } from "@storybook/react-webpack5";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Text",
  argTypes: {
    bold: {
      control: "boolean",
    },
    underline: {
      control: "boolean",
    },
    italic: {
      control: "boolean",
    },
    transform: {
      control: "select",
      options: ["capitalize", "uppercase", "lowercase", "none"],
    },
    color: {
      control: "color",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

const Template = (args) => <Text {...args}>{args.children}</Text>;

const defaultArgs = {
  bold: false,
  underline: false,
  italic: false,
  transform: "none",
  children: "The quick brown fox jumps over the lazy dog.",
};

export const LightTheme = Template.bind({});
LightTheme.args = defaultArgs;

export const DarkTheme = Template.bind({});
DarkTheme.args = defaultArgs;

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
