import { Meta } from "@storybook/react";
import Input from "./Input";
import { Card } from "../card/Card.styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../config/theme";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Robokae/Input",
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
    as: {
      control: "select",
      options: ["input", "textarea"],
    },
    resize: {
      control: "select",
      options: ["none", "both", "horizontal", "vertical"],
    },
    rows: {
      control: "number",
      if: { arg: "as", eq: "textarea" },
    },
  },
};

export default meta;

const Template = (args) => (
  <Card style={{ width: "500px" }}>
    <Input {...args} />
  </Card>
);

const defaultArgs = {
  as: "textarea",
  label: "Label",
};

export const LightTheme = Template.bind({});
LightTheme.args = defaultArgs;

export const DarkTheme = Template.bind({});
DarkTheme.args = defaultArgs;

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
