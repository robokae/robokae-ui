import { Meta } from "@storybook/react";
import Icon from "./Icon";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../config/theme";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Robokae/Icon",
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
    name: {
      control: "select",
      options: Object.keys(require("react-bootstrap-icons")),
      description: "Icon name",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    color: {
      control: "color",
    },
  },
};

export default meta;

const Template = (args) => <Icon {...args} />;

const defaultArgs = {
  name: "Book",
  size: "md",
};

export const LightTheme = Template.bind({});
LightTheme.args = defaultArgs;

export const DarkTheme = Template.bind({});
DarkTheme.args = defaultArgs;

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
